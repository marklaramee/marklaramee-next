// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-1'});

const emailAddress = 'marklaramee@gmail.com';

type Data = {
  name: string
}

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    // // Create the promise and SES service object
    // var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

    // // Handle promise's fulfilled/rejected states
    // sendPromise.then(function(data: any) {
    //     console.log(data.MessageId);
    //     res.status(200).json({ name: 'good' })
    // }).catch(function(err: any) {
    //     console.error(err, err.stack);
    //     res.status(200).json({ name: 'bad' })
    // });

   res.status(200).json({ name: 'John Doe' })
}
