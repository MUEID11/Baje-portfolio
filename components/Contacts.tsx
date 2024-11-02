"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Meteors } from "./ui/meteors";


const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      console.log(data); // Log response for debugging

      // Show success toast notification
      toast.success("Mail sent successfully");

      // Optionally, reset form fields after successful submission
      setFormState({
        subject: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending email:", error.message);
      // Show error toast notification
      toast.error("Failed to send email");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      <div className="rounded-lg">
        <h2 className="text-2xl sm:text-5xl text-center sm:mt-20 mt-12 smLmb-10 mb-4 font-bold text-white">
          Contact Me
        </h2>
      </div>
      <div
        id="contact"
        className="my-6 sm:my-16 mx-2 sm:mx-10 bg-black-300 text-white flex items-center justify-center"
      >
        <form
          onSubmit={sendMail}
          className="bg-gray-900 p-2 sm:p-8 rounded-lg w-full shadow-lg"
        >
          <div className="flex gap-5 w-full flex-col md:flex-row">
            <div className="flex flex-col mb-4 w-full  md:w-1/2">
              <label className="mb-2 text-gray-300" htmlFor="subject">
                Subject
              </label>
              <input
                className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                required
                id="subject"
                placeholder="Subject"
                value={formState.subject}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-4 w-full  md:w-1/2">
              <label className="mb-2 text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                required
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-2 text-gray-300" htmlFor="message">
              Message
            </label>
            <textarea
              className="p-3 bg-gray-800 text-white rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              required
              placeholder="Your Message"
              value={formState.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition duration-300"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
