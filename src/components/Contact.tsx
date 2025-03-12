import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  // Helper function to format text with newlines
  const formatMultiLineText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <p key={index} className="mb-1">{line}</p>
    ));
  };
  
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('contact.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">{t('contact.address.title')}</h3>
                  <div>{formatMultiLineText(t('contact.address.value'))}</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">{t('contact.phone.title')}</h3>
                  <div>{formatMultiLineText(t('contact.phone.value'))}</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">{t('contact.hours.title')}</h3>
                  <div>{formatMultiLineText(t('contact.hours.value'))}</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Car className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">{t('contact.parking.title')}</h3>
                  <div>{formatMultiLineText(t('contact.parking.value'))}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-dark/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-dark/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-dark/50"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;