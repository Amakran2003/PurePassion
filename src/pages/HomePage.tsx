import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
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
          <Features />
          <AboutPreview />
          <Testimonials />
          <Catering />
        </motion.main>
      )}
    </>
  );
};

export default HomePage;