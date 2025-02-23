import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <section className="section">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-8 bg-white/10 rounded"
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;