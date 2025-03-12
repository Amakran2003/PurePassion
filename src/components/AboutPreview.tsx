import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const AboutPreview = () => {
  const { t } = useLanguage();

  return (
    <section id="about-preview" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              {t('about.description1')}
            </p>
            <p className="text-lg mb-6">
              {t('about.description2')}
            </p>
            <Link to="/about" className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors">
              {t('about.readmore')} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-[300px] md:h-full min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80"
              alt="Intérieur du restaurant Pure Passion"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPreview;
