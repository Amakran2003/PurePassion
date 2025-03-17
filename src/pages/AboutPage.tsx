import { motion } from 'framer-motion';
import About from '../components/about/About';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-terracotta text-center">{t('about.team.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Chef Karim"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chef Karim</h3>
              <p className="text-olive">{t('about.team.chef')}</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Amina"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1592498546551-222538011a35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Amina</h3>
              <p className="text-olive">{t('about.team.pastry')}</p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default AboutPage;