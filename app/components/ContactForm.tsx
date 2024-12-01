import React from 'react'

const ContactForm = () => {
  return (
    <div className="p-4 w-[85vw]">
      <h2 className="text-xl font-bold mb-4 bungee-hairline-regular">Contact me</h2>
      <form>
        <div className="flex flex-col sm:flex-row mb-4 w-full gap-4">
          <div className="form-control w-full mr-4 sm:mr-0">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" className="input input-bordered" placeholder="Your Name" required />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" className="input input-bordered" placeholder="Your Email" required />
          </div>
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Your Message" required></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary w-full my-5">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm