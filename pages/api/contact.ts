/*
https://docs.aws.amazon.com/ses/latest/dg/send-email-api.html

https://docs.aws.amazon.com/ses/latest/dg/send-an-email-using-sdk-programmatically.html


https://medium.com/nerd-for-tech/sending-emails-with-nextjs-and-amazon-simple-email-services-ses-8e4e10d1d397


*/


export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;
  const private_key = process.env.PRIVATE_KEY;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.contactName || !body.email) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Missing required values' })
  }



  const gcaptchaBody = `secret=${private_key}&response=${body.captchaToken}`

  try {
    fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: gcaptchaBody,
    })
  } catch (err) {
    console.log(err);
  };





  // try {
  //     fetch("https://www.google.com/recaptcha/api/siteverify", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body: `secret=your_secret_key&response=${req.body.gRecaptchaToken}`,
  //     })

 
  res.status(200).json({ data: `${gcaptchaBody}` })
}