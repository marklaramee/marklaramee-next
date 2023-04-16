import React from 'react'
import classnames from 'classnames';
import styles from './styles/ContactForm.module.css';

const ContactForm = () => {
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
            </form>
        </div>
    );
};

export default ContactForm;