"use client";
import React, { useRef, useEffect, FormEvent } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Icon } from '@iconify/react';

const ContactForm = () => {
  const notify = () => toast('Message Sent!',
    {
      position: 'bottom-center',
      icon: <Icon icon="line-md:email-check-twotone" className="ml-[4px] h-[20px] w-[20px]" />,
      style: {
        borderRadius: '10px',
        background: '#065f46',
        color: '#fff',
        // fontFamily: 'Chango, sans-serif',
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: '0.05em',
        // textTransform: 'uppercase',
      },
    }
  );
  
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" }
      )
          .then((result) => {
            console.log(result.text);
            notify();
        }, (error) => {
            console.log(error.text);
        });
      (e.target as HTMLFormElement).reset();
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-10 pb-8 px-6 sm:px-8 md:px-30 w-[100%] bg-background-light-secondary dark:bg-background-dark-secondary shadow-xl"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl font-bold mb-4 chango-regular uppercase text-red-secondary dark:text-yellow-main"
      >
        Contact me
      </motion.h2>
      <motion.form 
        ref={form} 
        onSubmit={handleSubmit} 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="tracking-wider roboto-mine"
      >
        <div className="flex flex-col sm:flex-row mb-4 w-full gap-4 text-gray-200">
          <div className="form-control w-full mr-4 sm:mr-0">
            <label className="label">
              <span className="label-text text-black dark:text-white mb-2">Name</span>
            </label>
            <input type="text" className="input text-[16px] bg-white dark:bg-background-dark-tertiary placeholder:text-black dark:placeholder:text-gray-400 w-full" placeholder="Your Name" name="from_name" autoComplete='name' required />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black dark:text-white mb-2">Email</span>
            </label>
            <input type="email" name="reply_to" className="input text-[16px] bg-white dark:bg-background-dark-tertiary placeholder:text-black dark:placeholder:text-gray-400 w-full" placeholder="Your Email" autoComplete='email' required />
          </div>
        </div>
        <div className="form-control w-full mr-4 sm:mr-0 hidden">
          <label className="label">
            <span className="label-text text-black dark:text-white mb-2">Site Name</span>
          </label>
          <input type="text" value="Personal Website" readOnly className="input text-[16px] dark:bg-background-dark-tertiary placeholder:text-black dark:placeholder:text-gray-400 w-full" placeholder="Site Name" name="site_name" required />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-black dark:text-white mb-2">Message</span>
          </label>
          <textarea className="textarea text-[16px] bg-white dark:bg-background-dark-tertiary placeholder:text-black dark:placeholder:text-gray-400 w-full" placeholder="Your Message" name="message" required></textarea>
        </div>
        <div className="flex justify-center">
          <motion.button 
            type="submit" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn bg-emerald-800 dark:bg-green-main hover:dark:bg-green-main/80 hover:bg-emerald-600 active:bg-emerald-500 active:dark:bg-emerald-950 text-white w-full my-5 text-base border-none tracking-wider font-thin"
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default ContactForm;