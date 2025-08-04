// import Footer from "../../Components/Footer";
import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<null | string>(null);

  // مدیریت تغییر مقادیر فرم
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }

  // ارسال فرم به سرور
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Message sent successfully! we will reply you very very soon");
        setFormData({ name: "", email: "", subject: "", message: "" }); // ریست فرم
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  }

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
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
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
              value={formData.email}
              onChange={handleChange}
              required
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
              value={formData.subject}
              onChange={handleChange}
              required
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
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#e9ddd2] rounded-md placeholder-[#c39b76]  focus:outline-none focus:ring-2 focus:ring-[#d4b29c]"
            ></textarea>
          </div>

          <div className="flex justify-end mt-[20px]">
            <button
              type="submit"
              className="px-4 py-2.5 bg-[#D47312] rounded-[8px] text-white"
            >
              Send Message
            </button>
          </div>
        </form>

        {status && (
          <p className="mt-4 text-center font-medium text-[#D47312]">{status}</p>
        )}

        <div className="mt-[40px]">
          <h1 className="font-semibold text-lg">Contact information</h1>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@classics.com</p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
