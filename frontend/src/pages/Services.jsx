import { Link } from 'react-router-dom';
import ServiceIcon from '../components/ServiceIcon';
import { services, whatWeDo } from '../data/company';

const Services = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-gsme-blue-dark to-gsme-blue py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Strategic Solutions for Growth, Expansion & Global Business Success
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-gray-600 text-lg leading-relaxed">{whatWeDo}</p>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 bg-gsme-blue-pale">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gsme-blue/20 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gsme-blue rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:bg-gsme-gold transition-colors duration-300">
                    <ServiceIcon name={service.icon} className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-gsme-blue text-sm font-semibold">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-bold text-gsme-blue-dark mt-1 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">A structured approach to deliver real results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We understand your business goals and challenges.' },
              { step: '02', title: 'Strategy', desc: 'We develop a tailored plan for your growth.' },
              { step: '03', title: 'Execution', desc: 'We implement solutions with precision and care.' },
              { step: '04', title: 'Growth', desc: 'We support you for sustainable long-term success.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gsme-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gsme-blue-dark text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gsme-blue-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Every business is unique. Let us create a strategy tailored specifically to your needs.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-gsme-blue hover:bg-gsme-gold hover:text-white">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
