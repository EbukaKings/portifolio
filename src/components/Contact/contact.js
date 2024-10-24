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
            .sendForm('service_jl9vnh7', 'template_kfnln3i', form.current, 'aKURkq7p-9UwAEFjNeGKZ')
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
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
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name' required />
                    <input type='email' name='user_email' className='user' placeholder='Email' required />
                    <textarea name='message' className='user' placeholder='Message' required />
                    <input type='submit' value={isLoading ? 'Sending...' : 'Send'} className='button' disabled={isLoading} />
                    <div className='blur c-blurl' style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
