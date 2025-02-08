import React from "react";

const Form = () => {
  return (
    <div>
      <div className="max-w-md w-full">
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Your message"
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
