import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const service_id = import.meta.env.VITE_SERVICE;
  const template_id = import.meta.env.VITE_TEMP;
  const public_key = import.meta.env.VITE_PUB;
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        service_id,
        template_id,
        templateParams,
        public_key
      );
      setSuccess(true);
      alert('Thank you for reaching out! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send your message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-20 bg-white" id="contacts">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Let's Design Together</h2>
        <p className="text-gray-600">
          Have a project in mind or want to discuss a job opportunity? Fill out the form below, and I'll get back to you soon!
        </p>
      </div>
      <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          required
          minLength={2}
          maxLength={20}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          required
          minLength={10}
        />
        <button
          type="submit"
          className={`bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-300 ${
            isSending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {success && <p className="text-green-500 mt-4 text-center">Your message has been sent successfully!</p>}
    </section>
  );
};

export default ContactSection;