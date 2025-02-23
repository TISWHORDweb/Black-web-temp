import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, ArrowUpRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Star className="text-[var(--primary)]" size={24} />,
      title: 'Rewards',
      description: 'The best credit cards offer some tantalizing combinations of promotions and prizes',
    },
    {
      icon: <Shield className="text-[var(--primary)]" size={24} />,
      title: '100% Secured',
      description: 'We take proactive steps make sure your information and transactions are secure.',
    },
    {
      icon: <ArrowUpRight className="text-[var(--primary)]" size={24} />,
      title: 'Balance Transfer',
      description: 'A balance transfer credit card can save you a lot of money in interest charges.',
    },
  ];

  return (
    <section className="section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            You do the business,<br />
            we'll handle the money.
          </h2>
          <p className="text-gray-400 mb-8">
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
          </p>
          <button className="btn-primary">Get Started</button>
        </motion.div>

        <div className="grid gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="p-4 rounded-full bg-white/5">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;