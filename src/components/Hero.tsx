import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-body mb-4">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl font-body mb-8">
            {t('hero.description')}
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-block"
          >
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator - Fixed the centering */}
      <div className="absolute bottom-8 w-full flex justify-center z-10">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center"
        >
          <ChevronDown className="w-10 h-10 text-white" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;