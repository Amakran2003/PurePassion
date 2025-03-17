import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import MenuItem, { MenuItemProps } from './MenuItem';
import clsx from 'clsx';

interface MenuCategoryProps {
  titleKey: string;
  items: Omit<MenuItemProps, 'formatPrice' | 'index'>[];
  isOpen: boolean;
  onToggle: () => void;
  formatPrice: (price: number) => string;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ titleKey, items, isOpen, onToggle, formatPrice }) => {
  const { t, language } = useLanguage();

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  };

  const contentVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className={clsx(
          "w-full p-4 text-left flex justify-between items-center transition-colors",
          isOpen
            ? "bg-primary text-white"
            : "bg-white hover:bg-secondary-light"
        )}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold">{t(titleKey)}</h3>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={iconVariants}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={contentVariants}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white">
              {items.length > 0 ? (
                <div className="space-y-4">
                  {items.map((item, idx) => (
                    <MenuItem
                      key={item.titleKey}
                      {...item}
                      formatPrice={formatPrice}
                      index={idx}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center py-4 text-text/70 italic">
                  {language === 'fr'
                    ? 'Aucun plat disponible dans cette gamme de prix.'
                    : 'No dishes available in this price range.'}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuCategory;
