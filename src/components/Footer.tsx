import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    'Useful Links': ['Content', 'How it Works', 'Create', 'Explore', 'Terms & Services'],
    'Community': ['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters'],
    'Partner': ['Our Partner', 'Become a Partner']
  };

  return (
    <footer className="bg-[#0A0B1A]">
      <div className="section !pt-20 !pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">HooBank</h3>
            <p className="text-gray-400">
              A new way to make the payments easy, reliable and secure.
            </p>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © 2023 HooBank. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {['instagram', 'facebook', 'twitter', 'linkedin'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;