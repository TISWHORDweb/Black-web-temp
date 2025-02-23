import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, ArrowUpRight, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Features from './components/Features';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 mb-6">
              <span className="text-sm">20% DISCOUNT FOR 1 MONTH ACCOUNT</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              The Next <br />
              <span className="gradient-text">Generation</span> <br />
              Payment Method.
            </h1>
            
            <p className="text-gray-400 mb-8 max-w-lg">
              Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
              We examine annual percentage rates, annual fees.
            </p>
            
            <button className="btn-primary inline-flex items-center gap-2">
              Get Started <ArrowUpRight size={20} />
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder for your hero image */}
            <div className="aspect-square bg-gradient-to-tr from-[var(--primary)]/20 to-[var(--primary)]/5 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      <Stats />
      <Features />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;