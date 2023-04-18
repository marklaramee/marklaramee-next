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

const params = {
    Destination: {
      ToAddresses: ['recipient@example.com'], // Replace with the recipient email address
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello, world!', // Replace with the email body
        },
      },
      Subject: {
        Data: 'Test Email', // Replace with the email subject
      },
    },
    Source: 'sender@example.com', // Replace with the sender email address
  };


const sendEmailChat = async () => {
    const ses = new SES({
        region: 'us-west-1', // Change to the appropriate AWS region
    });
    const response = await ses.sendEmail(params).promise();
    return response.MessageId;
}

// const sendEmailDoc = async () => {
//     // Create the promise and SES service object
//     return AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
// }

const sendEmail = async () => {
  try {
    // chat version
    // const ses = new SES({
    //     region: 'us-west-1', // Change to the appropriate AWS region
    // });
    // const response = await ses.sendEmail(params).promise();
    // return response.MessageId;


    // 

  } catch (err: any)  {
    return "error";
    // console.error(err, err.stack);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // sendEmail().then(value => {
    //     res.status(200).json({ name: value })
    // });

    // Handle promise's fulfilled/rejected states

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
    sendPromise.then(
    function(data: any) {
        console.log(data.MessageId);
    }).catch(
        function(err: any) {
        console.error(err, err.stack);
    });
        
}
