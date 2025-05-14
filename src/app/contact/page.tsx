'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({
    type: null,
    message: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: null });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: data.message,
        });
        form.reset();
      } else {
        setFormStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-inter)] bg-gray-900 text-gray-100">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 backdrop-blur-sm bg-opacity-80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-400">SynapticFlow</a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
            <a href="/#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
            <a href="/#process" className="text-gray-300 hover:text-blue-400 transition-colors">Process</a>
            <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="flex-grow relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">Get in Touch</h1>
            <p className="text-xl text-gray-300 text-center mb-12">Choose how you'd like to connect with us</p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Email Contact Form */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h2>
                {formStatus.message && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      formStatus.type === 'success'
                        ? 'bg-green-500/10 border border-green-500/50 text-green-400'
                        : 'bg-red-500/10 border border-red-500/50 text-red-400'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="How can we help you?"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed ${
                      !isSubmitting && 'hover:from-blue-500 hover:to-indigo-500'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Meeting Booking Option */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-6 text-white">Schedule a Meeting</h2>
                <p className="text-gray-300 mb-8">Book a convenient time for a discovery call to discuss how our AI voice agents can help your business.</p>
                <div className="flex items-center justify-center h-48">
                  <a
                    href="https://app.simplymeet.me/darshithai/darshithai-60-1747222790458"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
                  >
                    Book a Meeting
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 text-white py-12">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">SynapticFlow</h2>
              <p className="text-gray-400 mt-2">AI voice agents that never sleep</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a href="/#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
              <a href="/#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
              <a href="/#process" className="text-gray-300 hover:text-blue-400 transition-colors">Process</a>
              <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SynapticFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 