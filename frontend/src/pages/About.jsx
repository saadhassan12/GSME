import { Link } from 'react-router-dom';
import {
  company,
  aboutText,
  whyChoose,
  industries,
  vision,
  mission,
} from '../data/company';

const About = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-gsme-blue-dark to-gsme-blue py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Your Trusted Partner for Business Growth and Global Expansion
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gsme-blue-pale rounded-2xl" />
                <img
                  src="/logo.png"
                  alt={company.name}
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover ring-4 ring-gsme-blue/20 shadow-xl"
                />
              </div>
            </div>
            <div>
              <span className="text-gsme-blue font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gsme-blue-dark mt-2 mb-6">
                {company.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{aboutText.intro}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{aboutText.detail}</p>
              <p className="text-gray-600 leading-relaxed">{aboutText.closing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gsme-blue-pale">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 bg-gsme-blue rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gsme-blue-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">{vision}</p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 bg-gsme-gold rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gsme-blue-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Industries We Support</h2>
            <p className="section-subtitle">Serving businesses across diverse sectors</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-gsme-blue-pale rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-blue-100"
              >
                <div className="w-12 h-12 bg-gsme-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gsme-blue-dark">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gradient-to-br from-gsme-blue-dark to-gsme-blue text-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose GSME?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-lg mb-2 text-gsme-gold">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gsme-blue-pale rounded-2xl p-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gsme-blue-dark mb-6">Company Information</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-sm text-gray-500 mb-1">Company Name</p>
                <p className="font-semibold text-gsme-blue-dark">{company.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">NTN</p>
                <p className="font-semibold text-gsme-blue-dark">{company.ntn}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Contact Person</p>
                <p className="font-semibold text-gsme-blue-dark">{company.contactPerson}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Website</p>
                <p className="font-semibold text-gsme-blue-dark">{company.domain}</p>
              </div>
            </div>
            <Link to="/contact" className="btn-primary inline-block mt-8">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
