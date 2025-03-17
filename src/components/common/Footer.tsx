import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary py-8 text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Le Safran Oriental</h3>
            <p className="mb-4">{t('footer.description')}</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">{t('footer.hours.title')}</h3>
            <p>{t('footer.hours.value')}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">{t('footer.contact.title')}</h3>
            <p>47 rue du Faubourg Saint-Denis</p>
            <p>Paris</p>
            <p>01 42 38 44 75 / 06 12 34 56 78</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Le Safran Oriental. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;