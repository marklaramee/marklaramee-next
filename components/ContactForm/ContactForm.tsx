import styles from './styles/Contact.module.css';

const ContactForm = () => {
    return (
        <form action="/contact-action" method="post">
            <label htmlFor="first">First name:</label>
            <input type="text" id="first" name="first" />
            <label htmlFor="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;