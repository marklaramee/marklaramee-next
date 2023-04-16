/*
https://docs.aws.amazon.com/ses/latest/dg/send-email-api.html

https://docs.aws.amazon.com/ses/latest/dg/send-an-email-using-sdk-programmatically.html


https://medium.com/nerd-for-tech/sending-emails-with-nextjs-and-amazon-simple-email-services-ses-8e4e10d1d397


*/


export default async function handler(req, res) {
  const acceptableScore = 0.5
  const body = req.body;
  const private_key = process.env.PRIVATE_KEY;
  const gcaptchaBody = `secret=${private_key}&response=${body.captchaToken}`
  const gHeaders = {
        "Content-Type": "application/x-www-form-urlencoded",
      }


  var captchaRep = 'unset';

  try {
    // fetch("https://www.google.com/recaptcha/api/siteverify", {
    //   method: 'POST',
    //   headers: gHeaders,
    //   body: gcaptchaBody,
    // })
    // .then((captchaResponse) => {
    //   res.status(200).json(captchaResponse)
    // })

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
      res.status(200).json({message: 'success'});
    }
  } catch (err) {
    // console.log(err);
    res.status(200).json({error: err});
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