import { Link } from 'react-router-dom';
import ServiceIcon from '../components/ServiceIcon';
import {
  company,
  services,
  whyChoose,
  industries,
  aboutText,
  whatWeDo,
  vision,
  mission,
} from '../data/company';

const Home = () => {
  const featuredServices = services.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gsme-blue-dark via-gsme-blue to-gsme-blue-light min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gsme-gold rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-gsme-gold font-semibold text-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                {company.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {company.tagline}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                Helping businesses unlock growth through strategic partnerships, market expansion,
                trade facilitation, and business advisory solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary text-center">
                  Explore Our Services
                </Link>
                <Link to="/contact" className="btn-outline text-center">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex justify-center animate-fade-in animation-delay-400">
              <div className="relative">
                <div className="absolute inset-0 bg-gsme-gold/20 rounded-full blur-2xl scale-110" />
                <img
                  src="/logo.png"
                  alt={company.name}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover ring-4 ring-white/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gsme-blue font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gsme-blue-dark mt-2 mb-6">
                Your Trusted Partner for Business Growth
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{aboutText.intro}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{aboutText.detail}</p>
              <Link to="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, i) => (
                <div
                  key={industry}
                  className={`bg-gsme-blue-pale p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow ${
                    i === 2 ? 'col-span-2' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-gsme-blue rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gsme-blue-dark text-sm">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gsme-blue-pale">
        <div className="container-custom text-center">
          <span className="text-gsme-blue font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="section-title mt-2">Driving Growth Through Strategy & Opportunity</h2>
          <p className="section-subtitle max-w-3xl mx-auto">{whatWeDo}</p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gsme-blue font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="section-title mt-2">Strategic Solutions for Global Success</h2>
            <p className="section-subtitle">
              Comprehensive business solutions tailored to your growth journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-gsme-blue/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gsme-blue rounded-xl flex items-center justify-center text-white mb-5 group-hover:bg-gsme-gold transition-colors duration-300">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="font-bold text-gsme-blue-dark mb-3 text-lg">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose GSME */}
      <section className="py-20 bg-gradient-to-br from-gsme-blue-dark to-gsme-blue text-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gsme-gold font-semibold text-sm uppercase tracking-wider">Why Choose GSME</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">One Partner, Every Solution</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="w-2 h-2 bg-gsme-gold rounded-full mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gsme-blue-pale rounded-2xl p-8 border-l-4 border-gsme-blue">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gsme-blue rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gsme-blue-dark">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{vision}</p>
            </div>
            <div className="bg-gsme-blue-pale rounded-2xl p-8 border-l-4 border-gsme-gold">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gsme-gold rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gsme-blue-dark">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gsme-blue">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Reach out for consultations, partnerships, or any business inquiries. We&apos;d love to hear from you.
          </p>
          <Link
            to="/contact"
            className="bg-white text-gsme-blue hover:bg-gsme-gold hover:text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 inline-block transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
