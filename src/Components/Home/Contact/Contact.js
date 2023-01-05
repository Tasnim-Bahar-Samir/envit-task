import React from "react";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nfcpj2h', 'template_o8jmm9l', form.current, 'ZUW9TzzxieswQrWmB')
      .then((result) => {
          toast.success('Email send successfully')
      }, (error) => {
          console.log(error.text);
          toast.error('Failed to send')
      });
  };
  return (
    <div>
      <h2 id="contact" className="text-4xl font-bold text-center mt-16 mb-5">
        Contact
      </h2>
      <div className=" px-16">
        <div className=" gap-4 flex md:flex-row flex-col items-center">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl text-gray-700 font-bold my-2">Let's Talk</h1>
            <h2 className="text-2xl">If you have any query about us or about our work. Please feel free to mail us.</h2>
          </div>
          <div className="border shadow-2xl md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <textarea
                  className="textarea textarea-bordered w-full"
                  name="message"
                  id=""
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className=" mt-6">
                <button className="px-5 py-2 rounded-sm bg-orange-600 text-white flex items-center gap-1">
                  <IoIosSend />
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
