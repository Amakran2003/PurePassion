import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Catering = () => {
  const { t } = useLanguage();
  
  return (
    <section id="catering" className="section-container bg-secondary-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('catering.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80" 
              alt="Service Traiteur - Buffet marocain" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              {t('catering.description1')}
            </p>
            <p className="text-lg">
              {t('catering.description2')}
            </p>
            <p className="text-lg">
              {t('catering.description3')}
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <Link to="/contact" className="btn-primary">
                {t('catering.cta')}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Catering;
