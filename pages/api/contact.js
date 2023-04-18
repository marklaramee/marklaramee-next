/*
https://docs.aws.amazon.com/ses/latest/dg/send-email-api.html

https://docs.aws.amazon.com/ses/latest/dg/send-an-email-using-sdk-programmatically.html


https://medium.com/nerd-for-tech/sending-emails-with-nextjs-and-amazon-simple-email-services-ses-8e4e10d1d397

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html

https://docs.aws.amazon.com/cli/latest/topic/config-vars.html#sourcing-credentials-from-external-processes

email forwarding event
https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications-email.html

*/

var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-1'});

const emailAddress = 'marklaramee@gmail.com';

const sendEmail = () => {

  try {

    // create params
    var params = {
  Destination: { /* required */
    CcAddresses: [emailAddress],
    ToAddresses: [emailAddress]
  },
  Message: { 
    Body: { 
      Html: {
       Charset: "UTF-8",
       Data: "HTML_FORMAT_BODY"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: emailAddress, /* required */
  ReplyToAddresses: [emailAddress],
};

    // Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

    sendPromise.then(
    function(data) {
      return data.MessageId;
    }).catch(
      function(err) {
      return err;
    });
  }
  catch (err) {
    return err;
  }
}


export default async function handler(req, res) {

  const acceptableScore = 0.5
  const body = req.body;
  const private_key = process.env.PRIVATE_KEY;
  const gcaptchaBody = `secret=${private_key}&response=${body.captchaToken}`
  const gHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }

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
      res.status(403).json({message: 'captcha score too low'});
    } else {
      const emailMessage = await sendEmail();
      res.status(200).json({message: emailMessage});
    }
    res.status(200).json({message: "stop 1"});
  } catch (err) {
    res.status(400).json({error: err});
  };
  res.status(200).json({message: "stop 2"});

/*
{ success: false, 'error-codes': [ 'timeout-or-duplicate' ] }

{
  success: true,
  challenge_ts: '2023-04-16T21:45:21Z',
  hostname: 'localhost',
  score: 0.9,
  action: 'yourAction'
}
*/

}