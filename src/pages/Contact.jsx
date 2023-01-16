import React from "react";

const Contact = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <div className="p-8 md:mx-4 bg-dark-bg-neutral rounded-md shadow-md w-full mb-4">
          <div className="m-3">
            <h3 className="text-2xl text-dark-text-primary font-bold mb-6">
              Email
            </h3>
            <p className="text-dark-text-secondary">rphlncs@gmail.com</p>
          </div>
        </div>
        <form className="p-8 md:mx-4 bg-dark-bg-neutral rounded-md shadow-md">
          <div className="m-3">
            <h3 className="text-2xl text-dark-text-primary font-bold mb-6">
              Get in Touch
            </h3>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl py-4 px-6 text-sm text-dark-text-primary bg-dark-bg-neutral-lighter focus:outline focus:outline-dark-text-secondary focus:bg-dark-bg-main "
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full  rounded-xl py-4 px-6 text-sm text-dark-text-primary bg-dark-bg-neutral-lighter focus:outline focus:outline-dark-text-secondary focus:bg-dark-bg-main"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full rounded-xl py-4 px-6 text-sm text-dark-text-primary bg-dark-bg-neutral-lighter focus:outline focus:outline-dark-text-secondary focus:bg-dark-bg-main"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows="6"
                  className="w-full  rounded-xl py-4 px-6 text-sm text-dark-text-primary bg-dark-bg-neutral-lighter focus:outline focus:outline-dark-text-secondary focus:bg-dark-bg-main"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3 text-right">
                <input
                  type="submit"
                  value="Send Message"
                  className="rounded-xl bg-primary-main text-center py-3 px-6 text-dark-text-primary leading-7 tracking-wide hover:opacity-75 cursor-pointer "
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
