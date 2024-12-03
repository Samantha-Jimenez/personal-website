"use client";
import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const notify = () => toast('message sent',
    {
      position: 'bottom-center',
      icon: '✅',
      style: {
        borderRadius: '10px',
        background: '#333',
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
      emailjs.sendForm('service_7z8bwyp', 'template_gte2cwa', form.current, { publicKey: 'lYPDqWbwbsFTQDuJz'})
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
    <div className="p-4 w-[85vw] text-gray-200">
      <h2 className="text-xl font-bold mb-4 bungee-hairline-regular">Contact me</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row mb-4 w-full gap-4 text-gray-200">
          <div className="form-control w-full mr-4 sm:mr-0">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" className="input input-bordered" placeholder="Your Name" name="from_name" required />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="reply_to" className="input input-bordered" placeholder="Your Email" required />
          </div>
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Your Message" name="message" required></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn bg-emerald-600 hover:bg-emerald-800 active:bg-emerald-900 text-white w-full my-5 bungee-hairline-regular text-base">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;