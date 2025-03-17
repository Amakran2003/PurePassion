import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{t('home.welcome.title')}</h2>
        <p className="text-lg mb-8">
          {t('home.welcome.description')}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="p-6 bg-secondary-light rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">{t('home.feature1.title')}</h3>
            <p>{t('home.feature1.description')}</p>
          </motion.div>
          <motion.div 
            className="p-6 bg-secondary-light rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">{t('home.feature2.title')}</h3>
            <p>{t('home.feature2.description')}</p>
          </motion.div>
          <motion.div 
            className="p-6 bg-secondary-light rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">{t('home.feature3.title')}</h3>
            <p>{t('home.feature3.description')}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
