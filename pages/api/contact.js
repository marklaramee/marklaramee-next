/*
https://docs.aws.amazon.com/ses/latest/dg/send-email-api.html

https://docs.aws.amazon.com/ses/latest/dg/send-an-email-using-sdk-programmatically.html


https://medium.com/nerd-for-tech/sending-emails-with-nextjs-and-amazon-simple-email-services-ses-8e4e10d1d397


*/

var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-1'});

const sendEmail = () => {

  // create params
  var params = {
    Destination: { 
      CcAddresses: [],
      ToAddresses: [
        'marklaramee@gmail.com',
      ]
    },
    Message: { 
      Body: { 
        Text: {
        Charset: "UTF-8",
        Data: "test send email"
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Test email'
      }
      },
    Source: 'marklaramee@gmail.com',
    ReplyToAddresses: [],
  };

  // Create the promise and SES service object
  var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

  sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
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
      sendEmail();
      res.status(200).json({message: 'success'});
    }


    // Create sendEmail params 
  
  } catch (err) {
    res.status(400).json({error: err});
  };

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