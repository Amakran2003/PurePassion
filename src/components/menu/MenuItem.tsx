import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import clsx from 'clsx';

export interface MenuItemProps {
  titleKey: string;
  descriptionKey: string;
  price: number;
  isChefChoice?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  index: number;
  formatPrice: (price: number) => string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  titleKey,
  descriptionKey,
  price,
  isChefChoice = false,
  isVegetarian = false,
  isSpicy = false,
  index,
  formatPrice
}) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={clsx(
        "p-3 rounded-lg transition-all hover:shadow-md border-l-2",
        isChefChoice ? "bg-primary/5 border-l-primary" : "",
        isVegetarian ? "bg-green-500/5 border-l-green-500" : "",
        isSpicy ? "bg-red-500/5 border-l-red-500" : "",
        !isChefChoice && !isVegetarian && !isSpicy ? "border-l-gray-200" : ""
      )}
    >
      <div className="flex justify-between items-start">
        <div className="flex-grow">
          <h4 className="text-lg font-medium flex items-center">
            {t(titleKey)}
            {isChefChoice && (
              <Star className="w-4 h-4 ml-2 fill-primary text-primary" />
            )}
            {isSpicy && (
              <span className="ml-2 text-xs px-2 py-0.5 bg-red-100 text-red-800 rounded-full">
                {t('menu.spicy')}
              </span>
            )}
            {isVegetarian && (
              <span className="ml-2 text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                {t('menu.veg')}
              </span>
            )}
          </h4>
          <p className="text-sm text-text/80 mt-1">{t(descriptionKey)}</p>
        </div>
        <span className="text-lg font-semibold text-primary ml-2">
          {formatPrice(price)}
        </span>
      </div>
    </motion.div>
  );
};

export default MenuItem;
