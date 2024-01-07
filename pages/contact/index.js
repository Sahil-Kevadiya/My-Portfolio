//import Circles from '/components/Circles';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { fadeIn } from '../../variants';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ... (import statements and other code)

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    number: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic input validation
    if (!validateEmail(formData.email) || !validatePhoneNumber(formData.number)) {
      notifyError('Invalid email or phone number');
      return;
    }

    // Additional validation checks if needed

    emailjs
      .sendForm('service_phc5m5n', 'template_q8la1cs', formRef.current, '-aNHj-gcplcadR9Gd')
      .then((result) => {
        notifySuccess('Email sent successfully');
        // Clear the form content on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          number: '',
          message: ''
        });
      })
      .catch((error) => {
        notifyError('Error sending email');
      });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Simple example: accept only numeric phone numbers with at least 10 digits
    const phoneNumberRegex = /^\d{10,}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  return (
    <div className='h-full bf-primary/30'>
      <ToastContainer />
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* ... (existing code) */}
          <motion.form
            ref={formRef}
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={sendEmail}
          >
            <div className='flex gap-x-6'>
              <input type='text' placeholder='name' className='input' name='name' value={formData.name} onChange={handleChange} />
              <input type='email' placeholder='email' className='input' name='email' value={formData.email} onChange={handleChange} />
            </div>
            <input type='text' placeholder='subject' className='input' name='subject' value={formData.subject} onChange={handleChange} />
            <input type='Phone number' placeholder='number' className='input' name='number' value={formData.number} onChange={handleChange} />
            <textarea placeholder='message' className='textarea' name='message' value={formData.message} onChange={handleChange}></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&apos;s&apos; talk
              </span>
              <BsArrowRight className='translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
