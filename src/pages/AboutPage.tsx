import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';

const AboutPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <About />
      <section className="section-container bg-white dark:bg-primary-dark/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-terracotta text-center">Notre Équipe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80"
                  alt="Chef Mehdi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chef Mehdi</h3>
              <p className="text-olive">Chef Exécutif</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80"
                  alt="Sofia"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sofia</h3>
              <p className="text-olive">Chef Pâtissière</p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default AboutPage;