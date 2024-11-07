import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading
    
        emailjs
            .sendForm('service_1cv0wov', 'template_j3gvjni', form.current, 'G-AwligwMlai2fMTB')
            .then(
                () => {
                    alert('Email sent successfully!');
                },
                (error) => {
                    alert('Failed to send email. Please try again later.');
                }
            )
            .finally(() => {
                setIsLoading(false); // Stop loading
            });
    };

    return (
        <div className='contact-form'>
            <div className='c-left'>
                <div className='awesome'>
                    <span>Get in touch </span>
                    <span>Contact me</span>
                    <div className='blur s-blurl' style={{ background: 'ABF1FF94' }}></div>
                </div>
            </div>
            <div className='c-right' id='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" className="user" placeholder="Name" required />
                    <input type="email" name="to_name" className="user" placeholder="Email" required />
                    <textarea name="message" className="user" placeholder="Message" required />
                    <input type="submit" value={isLoading ? 'Sending...' : 'Send'} className="button" disabled={isLoading} />
                    <div className="blur c-blurl" style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
