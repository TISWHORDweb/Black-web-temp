import React from 'react';
import { motion } from 'framer-motion';

const Billing = () => {
  return (
    <section className="section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Placeholder for billing image */}
          <div className="aspect-square bg-gradient-to-tr from-[var(--primary)]/20 to-[var(--primary)]/5 rounded-2xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Easily control your<br />
            billing & invoicing.
          </h2>
          <p className="text-gray-400 mb-8">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. 
            Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>
          
          <div className="flex gap-4">
            {/* Placeholder for app store buttons */}
            <div className="w-40 h-12 bg-white/10 rounded-lg"></div>
            <div className="w-40 h-12 bg-white/10 rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Billing;