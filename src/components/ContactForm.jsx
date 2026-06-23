import "./ContactFormStyles.css";

function ContactForm() {
    return (
        <div className="contact-form">
            <h1>Send a message to us!</h1>
            <form>
                <input placeholder="Your Name" />
                <input placeholder="Your Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;