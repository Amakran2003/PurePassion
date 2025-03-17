import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import Catering from '../components/home/Catering';
import SplashScreen from '../components/home/SplashScreen';
import { useLanguage } from '../context/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash if this is the first visit in this session
    return !sessionStorage.getItem('splashShown');
  });

  useEffect(() => {
    if (showSplash) {
      // Show splash screen for 2.5 seconds
      const timer = setTimeout(() => {
        setShowSplash(false);
        // Mark that splash has been shown in this session
        sessionStorage.setItem('splashShown', 'true');
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>
      
      {!showSplash && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <section className="section-container bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{t('home.welcome.title')}</h2>
              <p className="text-lg mb-8">
                {t('home.welcome.description')}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-secondary-light rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t('home.feature1.title')}</h3>
                  <p>{t('home.feature1.description')}</p>
                </div>
                <div className="p-6 bg-secondary-light rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t('home.feature2.title')}</h3>
                  <p>{t('home.feature2.description')}</p>
                </div>
                <div className="p-6 bg-secondary-light rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t('home.feature3.title')}</h3>
                  <p>{t('home.feature3.description')}</p>
                </div>
              </div>
            </div>
          </section>
          <AboutPreview />
          <Testimonials />
          <Catering />
        </motion.main>
      )}
    </>
  );
};

export default HomePage;