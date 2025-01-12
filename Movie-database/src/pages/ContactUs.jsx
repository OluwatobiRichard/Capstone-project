import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    status: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({
      status: "success",
      message: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen w-screen bg-[#1B1B1B] py-6 md:py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-white">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Contact Us</h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Have questions about FilmVerse? We're here to help! Get in touch with us
            and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#2d2d2d] rounded-xl p-6 md:p-8 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Get in Touch</h2>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 md:p-4 bg-[#1B1B1B] rounded-full">
                    <FaEnvelope className="text-[#007bff] text-lg md:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Email</h3>
                    <p className="text-gray-400 text-sm">contact@oluwatobirichard001@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 md:p-4 bg-[#1B1B1B] rounded-full">
                    <FaPhoneAlt className="text-[#007bff] text-lg md:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Phone</h3>
                    <p className="text-gray-400 text-sm">+234-081-4406-3982</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 md:p-4 bg-[#1B1B1B] rounded-full">
                    <IoLocationSharp className="text-[#007bff] text-lg md:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Location</h3>
                    <p className="text-gray-400 text-sm">Panama City, Panama</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-[#dedede] border-opacity-20">
                <h3 className="font-semibold mb-4 text-sm md:text-base">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/gabrielisaacs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#1B1B1B] rounded-full hover:bg-[#007bff] transition-colors"
                  >
                    <FaGithub className="text-lg md:text-xl" />
                  </a>
                  <a
                    href="https://linkedin.com/in/gabrielisaacs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#1B1B1B] rounded-full hover:bg-[#007bff] transition-colors"
                  >
                    <FaLinkedin className="text-lg md:text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-[#2d2d2d] rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border border-[#dedede] border-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Is FilmVerse free to use?</h3>
                  <p className="text-gray-400 text-sm">
                    Yes, FilmVerse is completely free to use for browsing movies and creating watchlists.
                  </p>
                </div>
                <div className="border border-[#dedede] border-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-sm md:text-base">How do I report an issue?</h3>
                  <p className="text-gray-400 text-sm">
                    You can report any issues through our contact form or by emailing us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#2d2d2d] rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 md:py-3 rounded-full bg-[#1B1B1B] border border-[#dedede] border-opacity-20 focus:outline-none focus:border-[#007bff] text-white text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 md:py-3 rounded-full bg-[#1B1B1B] border border-[#dedede] border-opacity-20 focus:outline-none focus:border-[#007bff] text-white text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 md:py-3 rounded-full bg-[#1B1B1B] border border-[#dedede] border-opacity-20 focus:outline-none focus:border-[#007bff] text-white text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 rounded-2xl bg-[#1B1B1B] border border-[#dedede] border-opacity-20 focus:outline-none focus:border-[#007bff] text-white resize-none text-sm"
                  required
                ></textarea>
              </div>

              {submitStatus.status && (
                <div
                  className={`p-4 rounded-lg ${submitStatus.status === "success"
                    ? "bg-green-500 bg-opacity-10 text-green-400"
                    : "bg-red-500 bg-opacity-10 text-red-400"
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#007bff] text-white py-2 md:py-3 px-6 rounded-full hover:bg-blue-600 transition-colors text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;