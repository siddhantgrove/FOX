import React, { useState } from "react";
import { submitContactForm } from "./contactService.js";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email:"",message:""})
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-3 border rounded-lg" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded-lg" />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" className="w-full p-3 border rounded-lg" rows="5" />
      <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition">Send Message</button>
    </form>
  );
}
