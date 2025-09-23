import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ga5g6uz', 'template_tqubusz', form.current, 'KWxlFeNHpK2anBx0U')
      .then((result) => {
          console.log(result.text);
          alert('Email successfully sent!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="h-screen flex flex-col items-center">
    <h1 className='text-3xl sm:text-4xl md:text-5xl text-white mt-40'>Get in Touch</h1>
    <p className='text-l sm:text-xl md:text-2xl text-gray-300 text-center mt-20'>I'd love to hear from you!</p>
    <form ref={form} onSubmit={sendEmail} className='flex flex-col w-1/2 md:w-1/4'>
      <input type="text" name="user_name" placeholder='Full Name' className='mt-5 text-gray-300 h-10 bg-gray-700'/>
      <input type="email" name="user_email" placeholder='Email' className='mt-5 text-gray-300 h-10 bg-gray-700' />
      <textarea name="message" placeholder='Message' className='h-40 mt-5 bg-gray-700 text-gray-300'/>
      <button onClick={sendEmail} className="text-red-700 mt-10 w-32 md:w-40 h-10 border-2 text-red border-red-700 hover:text-white duration-300 hover:bg-red-700 duration-300">
            Send </button>
    </form>
    </div>
  )
}

export default Contact;