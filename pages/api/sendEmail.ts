// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-1'});

var credentials = new AWS.SharedIniFileCredentials({profile: 'work-account'});
AWS.config.credentials = credentials;

const emailAddress = 'marklaramee@gmail.com';

type Data = {
  message: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log("GGGGGGGG");

    // setup captcha
    const acceptableScore = 0.1
    const private_key = process.env.PRIVATE_KEY;
    const gcaptchaBody = `secret=${private_key}&response=${req.body.captchaToken}`
    const gHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    // get form vars
    const fromName = req.body.contactName;
    const fromEmail = req.body.email;
    const message = req.body.message;

    // Create sendEmail params 
    var params = {
      Destination: { /* required */
        CcAddresses: [emailAddress],
        ToAddresses: [emailAddress]
      },
      Message: { 
        Body: { 
          Html: {
          Charset: "UTF-8",
          Data: `<p>${fromName} ${fromEmail} sent an email from marklaramee.com</p><p>${message}</p>`
          },
          Text: {
          Charset: "UTF-8",
          Data: `${fromName} ${fromEmail} sent an email from marklaramee.com\n\n${message}`
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Email from contact form at marklaramee.com'
        }
        },
      Source: emailAddress, /* required */
      ReplyToAddresses: [emailAddress],
    };


    
    try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: gHeaders,
      body: gcaptchaBody,
    });

    const captchaData = await response.json();

    if (!captchaData.success) {
      res.status(403).json({message: 'captcha call unsuccessful'});
    } else if (captchaData.score < acceptableScore){
      res.status(403).json({message: `captcha score too low: ${captchaData.score}`});
    } else {
      // const emailMessage = await sendEmail(); TODO: delete or move?
      // Create the promise and SES service object
      var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

      // Handle promise's fulfilled/rejected states
      sendPromise.then(function(data: any) {
          console.log(data.MessageId);
          res.status(200).json({ message: `good - captcha score ${captchaData.score}` })
      }).catch(function(err: any) {
          console.error(err, err.stack);
          res.status(200).json({ message: 'bad' })
      });
      
    }
  } catch (err: any) {
    res.status(400).json({message: err});
  };


    

   // res.status(200).json({ name: 'John Doe' })
}
