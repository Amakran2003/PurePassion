import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  className?: string;
  minimal?: boolean;
}

const LanguageToggle: React.FC<Props> = ({ className, minimal = false }) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  if (minimal) {
    return (
      <button
        onClick={toggleLanguage}
        className={clsx(
          "p-2 rounded-full hover:bg-secondary-light/50 transition-colors",
          className
        )}
        aria-label={`Switch to ${language === 'fr' ? 'English' : 'French'}`}
      >
        <Globe className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className={clsx("flex items-center", className)}>
      <button 
        onClick={toggleLanguage}
        className="flex items-center px-3 py-1 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
      >
        <Globe className="w-4 h-4 mr-1" />
        {language === 'fr' ? 'EN' : 'FR'}
      </button>
    </div>
  );
};

export default LanguageToggle;
