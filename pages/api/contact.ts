/*
https://docs.aws.amazon.com/ses/latest/dg/send-email-api.html

https://docs.aws.amazon.com/ses/latest/dg/send-an-email-using-sdk-programmatically.html


https://medium.com/nerd-for-tech/sending-emails-with-nextjs-and-amazon-simple-email-services-ses-8e4e10d1d397


*/


export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' })
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.first} ${body.last}` })
}