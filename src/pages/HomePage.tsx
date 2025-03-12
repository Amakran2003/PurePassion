import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Testimonials from '../components/Testimonials';
import Catering from '../components/Catering';
import SplashScreen from '../components/SplashScreen';

const HomePage = () => {
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Bienvenue à Pure Passion</h2>
              <p className="text-lg mb-8">
                « Goûtez à l'authenticité de la cuisine Orientale, Redécouvrez la cuisine Occidentale...»
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-secondary-light rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Cuisine Authentique</h3>
                  <p>Des recettes traditionnelles marocaines transmises de génération en génération</p>
                </div>
                <div className="p-6 bg-secondary-light rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">À Emporter</h3>
                  <p>Commandez vos plats préférés à emporter pour les déguster chez vous</p>
                </div>
                <div className="p-6 bg-secondary-light rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Service Traiteur</h3>
                  <p>Organisation d'évènements et location de salle jusqu'à 30 personnes</p>
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