import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      author: "Herman Jensen",
      title: "Founder & Leader"
    },
    {
      quote: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      author: "Steve Mark",
      title: "Founder & Leader"
    },
    {
      quote: "It is usually people in the money business, finance, and international trade that are really rich.",
      author: "Kenn Gallagher",
      title: "Founder & Leader"
    }
  ];

  return (
    <section className="section">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">
          What people are<br />
          saying about us
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="text-[var(--primary)] text-4xl mb-4">"</div>
            <p className="text-gray-400 mb-6">{testimonial.quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10"></div>
              <div>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;