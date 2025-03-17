import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.history.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              {t('about.description1')}
            </p>
            <p className="text-lg mb-4">
              {t('about.description3')}
            </p>
            <p className="text-lg">
              {t('about.description4')}
            </p>
          </div>
          <div className="relative h-[300px] md:h-full min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Intérieur du restaurant Le Safran Oriental"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;