import { Link } from 'react-router-dom';
import { company } from '../data/company';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gsme-blue-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="GSME" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20" />
              <div>
                <h3 className="font-bold text-lg">GSME</h3>
                <p className="text-blue-200 text-xs">Global Smart Move Enterprises</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              {company.tagline}. Helping businesses unlock growth through strategic partnerships and global expansion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gsme-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-blue-100 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gsme-gold">Contact Info</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gsme-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gsme-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gsme-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${company.phone}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gsme-gold">Company Details</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><span className="text-white font-medium">NTN:</span> {company.ntn}</li>
              <li><span className="text-white font-medium">Contact:</span> {company.contactPerson}</li>
              <li>
                <span className="text-white font-medium">Website:</span>{' '}
                <a href={company.website} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  {company.domain}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm">
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>
          <p className="text-blue-200 text-sm">{company.subtitle}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
