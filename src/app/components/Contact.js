import React, { useRef } from "react";
import {useEffect} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  
  emailjs.init("YOUR_USER_ID");


    // email sending code here
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_nhtz2uk",
          "template_lgwom5k",
          form.current,
          "fJLs4eqg6twg71Eof"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("email sent");
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  
 
  return (
    <div className="mx-auto w-full max-w-[550px] justify-center flex-auto py-28" id= "contact">
      <div className=" flex justify-center flex-col">
        <form ref={form} onSubmit={sendEmail}>
          <div className=" flex flex-col">
            <label
              for="contectmelabel"
              className="mb-20 drop-shadow-2xl block  text-6xl font-bold text-center text-opacity-10 text-white font-Lato"
            >
              Contact Me
            </label>

            <label
              for="name"
              className="mb-3 block text-base font-medium text-white font-Lato"
            >
              Full Name
            </label>

            <input
              type="name"
              name="user_name"
              className="py-2 bg-primary rounded-md border-2 border-bordercolor w-full px-5 placeholder:text-left placeholder:text-sm text-white placeholder:text-gray-500"
              placeholder="Name"
            ></input>
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="mb-2 mt-3 block text-base font-medium text-white font-Lato"
            >
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="example@domain.com"
              className="py-4 bg-primary rounded-md border-2 border-bordercolor w-full px-5 placeholder:text-left placeholder:text-sm text-white placeholder:text-gray-500"
            />
          </div>
          <div className="mb-5">
            <label
              for="subject"
              className="mb-3 block text-base font-medium text-white font-Lato"
            >
              Subject
            </label>
            <input
              type="text"
              name="user_subject"
              id="subject"
              placeholder="Enter your subject"
              className="py-4 bg-primary rounded-md border-2 border-bordercolor w-full px-5 placeholder:text-left placeholder:text-sm text-white placeholder:text-gray-500"
            />
          </div>
          <div className="mb-5">
            <label
              for="message"
              className="mb-3 block text-base font-medium text-white font-Lato"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="py-4 bg-primary rounded-md border-2 border-bordercolor w-full h-60 px-5 placeholder:text-left placeholder:text-sm text-white placeholder:text-gray-500"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-gray-200 py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
