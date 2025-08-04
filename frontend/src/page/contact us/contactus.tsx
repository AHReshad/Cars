import Footer from "../../Components/Footer";
import React from "react";

export default function contactus() {
  return (
    <div className="px-[176px] mt-[56px]">
      <div>
        <h1 className="font-bold text-[32px] leading-[40px] ">Contact Us</h1>
        <p className="text-[14px] leading-[21px] text-[#99734D] pt-[12px]">
          We'd love to hear from you! Whether you have questions about our
          vintage car rentals, need assistance with a booking, or just want to{" "}
          <br />
          share your love for classic cars, please reach out. Our team is
          dedicated to providing exceptional service and ensuring your
          experience <br /> with Classic Rides is unforgettable.
        </p>
      </div>

      <div className="max-w-md mt-[20px]">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-[#e9ddd2] rounded-md placeholder-[#c39b76]  focus:outline-none focus:ring-2 focus:ring-[#d4b29c]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-[#e9ddd2] rounded-md placeholder-[#c39b76]  focus:outline-none focus:ring-2 focus:ring-[#d4b29c]"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-[#e9ddd2] rounded-md placeholder-[#c39b76]  focus:outline-none focus:ring-2 focus:ring-[#d4b29c]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              // rows="4"
              placeholder="Message"
              className="w-full px-4 py-2 border border-[#e9ddd2] rounded-md placeholder-[#c39b76]  focus:outline-none focus:ring-2 focus:ring-[#d4b29c]"
            ></textarea>
          </div>
        </form>
        <div className="flex justify-end mt-[20px]">
          <button className="px-4 py-2.5 bg-[#D47312] rounded-[8px]">
            Send Message
          </button>
        </div>

        <div className="mt-[40px]">
          <h1>Contact information</h1>
          <h1>Phone: (555) 123-4567</h1>
          <h1>Email: info@classics.com</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
