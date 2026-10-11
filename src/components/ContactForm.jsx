import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Opens the visitor's email app with the message pre-filled
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:rowidamorsy9@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact" className="relative flex w-full items-center justify-center overflow-hidden bg-background pt-16 pb-32 md:pt-24 md:pb-48">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      <div className="relative z-10 container px-4 mx-auto">
        {/* Centered Form */}
        <div className="max-w-md mx-auto px-8 py-6 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1 text-center">Let's build something</h2>
          <p className="text-sm text-gray-500 mb-4 text-center">Available for freelance machine learning and computer vision projects — send over your problem and I'll tell you honestly what's possible.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
              <input
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                placeholder="Enter your name"
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
              <input
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                placeholder="Enter your email"
                name="email"
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
              <textarea
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                rows="4"
                placeholder="Enter your message"
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Direct contact */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm font-semibold">
          <a className="rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 transition" href="mailto:rowidamorsy9@gmail.com">rowidamorsy9@gmail.com</a>
          <a className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-100 transition" href="tel:+201094623280">+20 109 462 3280</a>
          <a className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-100 transition" href="https://www.linkedin.com/in/rowida-morsy/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-100 transition" href="https://github.com/rowidamorsy9-sudo" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
        <p className="mt-10 text-center text-xs text-gray-400">Rowida Morsy — freelance machine learning engineer · Giza, Egypt</p>
      </div>
    </div>
  );
}