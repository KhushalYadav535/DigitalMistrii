import React from 'react';
import { motion } from 'framer-motion';
import { Home, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const footerLinks = {
    'Services': [
      'Plumbing Services',
      'Electrical Work',
      'AC Repair',
      'Handpump Repair',
      'Appliance Repair',
      'Emergency Services'
    ],
    'Support': [
      'Help Center',
      'Contact Us',
      'Track Service',
      'Warranty Info',
      'Service Areas'
    ],
    'Company': [
      'About Us',
      'Careers',
      'Press',
      'Blog',
      'Partners'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img src="/applogo.jpeg" alt="Digital Mistri Logo" className="h-10 w-10 rounded-lg bg-white shadow" />
              <span className="text-xl font-bold">Digital Mistri</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Professional home services at your doorstep. From plumbing to electrical work, 
              we provide fast, reliable, and affordable solutions for all your home needs.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest updates on home service tips and special offers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-gray-300 text-sm">
            <p>&copy; 2024 Digital Mistri. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/privacy-policy.html" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;