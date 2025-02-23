import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CardDeal = () => {
  return (
    <section className="section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Find a better card deal<br />
            in few easy steps.
          </h2>
          <p className="text-gray-400 mb-8">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.
            Aliquet ultrices ac, ametau.
          </p>
          <button className="btn-primary inline-flex items-center gap-2">
            Get Started <ArrowUpRight size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Placeholder for card image */}
          <div className="aspect-square bg-gradient-to-tr from-[var(--primary)]/20 to-[var(--primary)]/5 rounded-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CardDeal;