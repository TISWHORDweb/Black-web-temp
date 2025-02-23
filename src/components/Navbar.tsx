import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[var(--background)]/80 backdrop-blur-sm">
      <div className="section !py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold gradient-text">HooBank</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Home</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">About Us</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Features</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Solution</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[var(--background)] border-t border-white/10">
            <div className="flex flex-col p-4 gap-4">
              <a href="#" className="hover:text-[var(--primary)] transition-colors">Home</a>
              <a href="#" className="hover:text-[var(--primary)] transition-colors">About Us</a>
              <a href="#" className="hover:text-[var(--primary)] transition-colors">Features</a>
              <a href="#" className="hover:text-[var(--primary)] transition-colors">Solution</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;