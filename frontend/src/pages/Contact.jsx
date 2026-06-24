import { useState } from 'react';
import { company } from '../data/company';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Thank you! We will get back to you soon.' });
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to connect to server. Please try again or contact us directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      ),
      icon2: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
      title: 'Office Address',
      value: company.address,
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      title: 'Email',
      value: company.email,
      link: `mailto:${company.email}`,
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
      title: 'Phone',
      value: company.phone,
      link: `tel:${company.phone}`,
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      ),
      title: 'Website',
      value: company.domain,
      link: company.website,
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-gsme-blue-dark to-gsme-blue py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out for consultations, partnerships, or any business inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gsme-blue-dark mb-2">Get In Touch</h2>
                <p className="text-gray-600">
                  Contact {company.contactPerson} for any business inquiries.
                </p>
              </div>

              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-gsme-blue-pale rounded-xl">
                  <div className="w-12 h-12 bg-gsme-blue rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                      {item.icon2}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gsme-blue-dark">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-gray-600 hover:text-gsme-blue text-sm transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="p-4 bg-gsme-blue-pale rounded-xl">
                <p className="text-sm text-gray-500">NTN</p>
                <p className="font-semibold text-gsme-blue-dark">{company.ntn}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gsme-blue-dark mb-6">Send Us a Message</h2>

                {status.message && (
                  <div
                    className={`mb-6 p-4 rounded-lg text-sm ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gsme-blue focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gsme-blue focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gsme-blue focus:border-transparent outline-none transition"
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gsme-blue focus:border-transparent outline-none transition"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gsme-blue focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your business needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gsme-blue-pale py-12">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-xl font-bold text-gsme-blue-dark mb-2">Visit Our Office</h3>
            <p className="text-gray-600 mb-4">{company.address}</p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(company.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gsme-blue hover:text-gsme-blue-dark font-semibold inline-flex items-center gap-2"
            >
              Open in Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
