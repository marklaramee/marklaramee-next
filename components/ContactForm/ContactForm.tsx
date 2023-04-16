import React from 'react'
import {useEffect, useCallback, useState} from 'react'
import classnames from 'classnames';
import styles from './styles/ContactForm.module.css';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

/* 
https://www.npmjs.com/package/react-google-recaptcha-v3
https://www.techomoro.com/how-to-add-google-recaptcha-v3-in-a-next-js-form/
*/

const ContactForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [ captchaToken, setCaptchaToken ] = useState('');

    // Create an event handler so you can call the verification on button click event or form submit
    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
        }

        const token = await executeRecaptcha('yourAction');
        // Do whatever you want with the token
        console.log(`captcha ready ${token}`)
        setCaptchaToken(token);
    }, [executeRecaptcha]);

    // You can use useEffect to trigger the verification as soon as the component being loaded
    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);



    return (
        <div className={styles.wrapper}>
            <form action='/contact-action' method='post' className={styles.contactForm}>
                <label htmlFor='contactName' className={styles.textContainer}>
                    <span>Your Name:</span>
                    <input type='text' id='contactName' name='contactName' required />
                </label>
                <label htmlFor='contactEmail' className={styles.textContainer}>
                    <span>Your Email Address:</span>
                    {/* https://www.regexlib.com/Search.aspx?k=email */}
                    <input 
                        type='text' 
                        id='contactEmail' 
                        name='contactEmail' 
                        required 
                        pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$'
                        title='Please use a valid email address.'
                    />
                </label>
                <label htmlFor='subject' className={styles.textContainer}>
                    <span>Subject (optional):</span>
                    <input type='text' id='subject' name='subject' />
                </label>
                <label htmlFor='message' className={styles.textAreaContainer}>
                    <div className={styles.textAreaDiv}>Message:</div>
                    <div className='growWrap'>
                        <textarea id='message' name='message' required >
                        </textarea>
                    </div>
                </label>
                <div className={styles.buttonContainer}>
                    <button type='submit' className='reset'>Contact Me</button>
                </div>
                <input type='hidden' name='captchaToken' value={captchaToken} />
            </form>
        </div>
    );
};

export default ContactForm;