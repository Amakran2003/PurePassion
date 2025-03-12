import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Menu = () => {
  const { t } = useLanguage();

  return (
    <section id="menu" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('menu.title')}</h2>
        <p className="mb-6 text-lg">{t('menu.description')}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('menu.specialties')}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium">{t('menu.couscous')}</h4>
                  <p className="text-sm opacity-75">{t('menu.couscous.description')}</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">{t('menu.tajines')}</h4>
                  <p className="text-sm opacity-75">{t('menu.tajines.description')}</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">{t('menu.pastilla')}</h4>
                  <p className="text-sm opacity-75">{t('menu.pastilla.description')}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('menu.mezze.title')}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium">{t('menu.mezze.assortment')}</h4>
                  <p className="text-sm opacity-75">{t('menu.mezze.description')}</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">{t('menu.briouates')}</h4>
                  <p className="text-sm opacity-75">{t('menu.briouates.description')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('menu.grills')}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium">{t('menu.skewers')}</h4>
                  <p className="text-sm opacity-75">{t('menu.skewers.description')}</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">{t('menu.merguez')}</h4>
                  <p className="text-sm opacity-75">{t('menu.merguez.description')}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('menu.pastries.title')}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium">{t('menu.pastries')}</h4>
                  <p className="text-sm opacity-75">{t('menu.pastries.description')}</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">{t('menu.tea')}</h4>
                  <p className="text-sm opacity-75">{t('menu.tea.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-secondary-light rounded-lg text-center">
          <p className="text-primary font-semibold">{t('menu.packaging.notice')}</p>
          <p className="italic mt-2">{t('menu.price.notice')}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;