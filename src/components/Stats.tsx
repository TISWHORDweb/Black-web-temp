import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: '3800+', label: 'USER ACTIVE' },
    { value: '230+', label: 'TRUSTED BY COMPANY' },
    { value: '$230M+', label: 'TRANSACTION' },
  ];

  return (
    <section className="section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <span className="text-4xl font-bold">{stat.value}</span>
            <span className="text-gradient uppercase">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;