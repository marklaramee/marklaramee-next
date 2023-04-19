import React from 'react'
import {useEffect, useCallback, useState} from 'react'
import {
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

import styles from './styles/ContactForm.module.css';
import { FormStatus } from '../../utils/FormResponse';

/* 
https://www.npmjs.com/package/react-google-recaptcha-v3
https://www.techomoro.com/how-to-add-google-recaptcha-v3-in-a-next-js-form/
https://nextjs.org/docs/guides/building-forms
*/

const ContactForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [ captchaToken, setCaptchaToken ] = useState('');
    const [ formStatus, setFormStatus ] = useState(FormStatus.unsent)

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
        // recaptcha not yet available
        return;
        }

        const token = await executeRecaptcha('yourAction'); // TODO: fix this stub?
        setCaptchaToken(token);
    }, [executeRecaptcha]);

    // trigger the verification as soon as the component is loaded
    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    const handleSubmit = async (event: React.ChangeEvent<any>) => {
        event.preventDefault();

        const endpoint = '/api/contact'
        const formData = {
            contactName: event.target.contactName.value,
            email: event.target.contactEmail.value,
            subject: event.target.subject.value, 
            message: event.target.message.value,
            captchaToken: event.target.captchaToken.value
        }
        const jsonData = JSON.stringify(formData);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData,
        }

        const response = await fetch(endpoint, options);
        const resultJson = await response.json();
        console.log(resultJson.message)
        setFormStatus(resultJson.result);
    };

    return (
        <div className={styles.wrapper}>
            { formStatus == FormStatus.unsent &&
                <form className={styles.contactForm} onSubmit={handleSubmit}>
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
            }
            { formStatus == FormStatus.success && 
                <div className={styles.resultMessage}>Thank you for your message.</div>
            }
            { formStatus == FormStatus.bot && 
                <div className={styles.resultMessage}>Thank you for getting in touch with me.</div>
            }
            { formStatus == FormStatus.fail && 
                <div className={styles.resultMessage}>We encountered an error. Please try again later.</div>
            }
        </div>
    );
};

export default ContactForm;