import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Emailform = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_y3u7p5d", "template_lem9q9z", form.current, "NiCCCfHjExIdhcGPv")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="form">
            <label>Name</label>
            <input type="text" name="name" className='input' required />
            <label>Email</label>
            <input type="email" name="email" required className='input' />

            <label>Phone Number</label>
            <input type="tel" name="number" required className='input' />

            <label>Message</label>
            <textarea name="message" className='input' />
            <input type="submit" value="Send" className='formButton' />
        </form>
    );
};


export default Emailform;