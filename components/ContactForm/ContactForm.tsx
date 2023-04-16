import styles from './styles/ContactForm.module.css';

const ContactForm = () => {
    return (
        <form action='/contact-action' method='post' className={styles.contactForm}>
            <label htmlFor='contactName'>Your Name:
                <input type='text' id='contactName' name='contactName' />
            </label>
            <label htmlFor='contactEmail'>Your Email Address:
                <input type='text' id='contactEmail' name='contactEmail' />
            </label>
            <label htmlFor='subject'>Subject (optional):
                <input type='text' id='subject' name='subject' />
            </label>
            <label htmlFor='message'>Message:
                <input type='text' id='message' name='message' />
            </label>
            
            <button type='submit'>Contact Me</button>
        </form>
    );
};

export default ContactForm;