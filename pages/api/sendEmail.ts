// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var AWS = require('aws-sdk');

type Data = {
  name: string
}

import { SES } from 'aws-sdk';
import { AWSError } from 'aws-sdk/lib/error';



// Set the region 
AWS.config.update({region: 'us-west-1'});

const emailAddress = 'marklaramee@gmail.com';

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

    var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
    sendPromise.then(
    function(data: any) {
        console.log(data.MessageId);
    }).catch(
        function(err: any) {
        console.error(err, err.stack);
    });
        
}
