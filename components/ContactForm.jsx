import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "peaceful_hamster",
        "FPkmibhobR1ikN23n",
        form.current,
        "template_l3168cr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
      <label htmlFor="user_name" className="text-blue-200 font-semibold">
        Name:
      </label>
      <input
        type="text"
        name="user_name"
        required
        className="p-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="user_email" className="text-blue-200 font-semibold">
        Email:
      </label>
      <input
        type="email"
        name="user_email"
        required
        className="p-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="message" className="text-blue-200 font-semibold">
        Message:
      </label>
      <textarea
        name="message"
        rows="5"
        required
        className="p-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
