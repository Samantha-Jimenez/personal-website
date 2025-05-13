"use client";
import React, { useRef, useEffect, FormEvent } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const notify = () => toast('message sent',
    {
      position: 'bottom-center',
      icon: '✅',
      style: {
        borderRadius: '10px',
        background: '#065f46',
        color: '#fff',
      },
    }
  );
  
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init({
      publicKey: "lYPDqWbwbsFTQDuJz",
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm('service_7z8bwyp', 'template_9vsibvk', form.current, { publicKey: 'lYPDqWbwbsFTQDuJz'})
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
    <div className="py-8 px-6 sm:px-24 w-[100%] bg-white dark:bg-black">
      <h2 className="text-xl font-bold mb-4 bungee-hairline-bold text-black dark:text-white">Contact me</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row mb-4 w-full gap-4 text-gray-200">
          <div className="form-control w-full mr-4 sm:mr-0">
            <label className="label">
              <span className="label-text text-black dark:text-white mb-2">Name</span>
            </label>
            <input type="text" className="input text-[16px] dark:bg-[#1D232A] placeholder:text-black dark:placeholder:text-white w-full" placeholder="Your Name" name="from_name" required />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black dark:text-white mb-2">Email</span>
            </label>
            <input type="email" name="reply_to" className="input text-[16px] dark:bg-[#1D232A] placeholder:text-black dark:placeholder:text-white w-full" placeholder="Your Email" required />
          </div>
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-black dark:text-white mb-2">Message</span>
          </label>
          <textarea className="textarea text-[16px] dark:bg-[#1D232A] placeholder:text-black dark:placeholder:text-white w-full" placeholder="Your Message" name="message" required></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn bg-emerald-700 dark:bg-emerald-600 hover:dark:bg-emerald-800 hover:bg-emerald-600 active:bg-emerald-500 active:dark:bg-emerald-950 text-white w-full my-5 bungee-hairline-bold text-lg border-none">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;