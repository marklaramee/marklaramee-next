import React from 'react'
import classnames from 'classnames';
import styles from './styles/ContactForm.module.css';

const ContactForm = () => {
    return (
        <div className={styles.wrapper}>
            <form action='/contact-action' method='post' className={styles.contactForm}>
                <label htmlFor='contactName' className={styles.textContainer}>
                    <span>Your Name:</span>
                    <input type='text' id='contactName' name='contactName' />
                </label>
                <label htmlFor='contactEmail' className={styles.textContainer}>
                    <span>Your Email Address:</span>
                    <input type='text' id='contactEmail' name='contactEmail' />
                </label>
                <label htmlFor='subject' className={styles.textContainer}>
                    <span>Subject (optional):</span>
                    <input type='text' id='subject' name='subject' />
                </label>
                <label htmlFor='message' className={styles.textAreaContainer}>
                    <div className={styles.textAreaDiv}>Message:</div>
                    <div className='growWrap'>
                        <textarea id='message' name='message'>
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