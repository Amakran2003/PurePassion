import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface MenuFilterProps {
  priceFilter: number;
  setPriceFilter: (price: number) => void;
  formatPrice: (price: number) => string;
}

const MenuFilter: React.FC<MenuFilterProps> = ({ priceFilter, setPriceFilter, formatPrice }) => {
  const { language } = useLanguage();
  
  return (
    <div className="mb-8 p-4 bg-secondary-light rounded-lg shadow-md">
      <label htmlFor="price-filter" className="block font-semibold mb-2 text-primary">
        {language === 'fr' ? 'Prix maximum:' : 'Maximum price:'} {formatPrice(priceFilter)}
      </label>
      <input
        type="range"
        id="price-filter"
        min="5"
        max="50"
        step="0.5"
        value={priceFilter}
        onChange={(e) => setPriceFilter(Number(e.target.value))}
        className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-primary"
      />
      <div className="flex justify-between mt-1 text-xs text-text/70">
        <span>5€</span>
        <span>50€</span>
      </div>
      
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm">
        <div className="flex items-center">
          <span className="inline-block w-4 h-4 bg-primary/20 rounded-full mr-2"></span>
          <span>{language === 'fr' ? 'Choix du Chef' : 'Chef\'s Choice'}</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-4 h-4 bg-green-500/20 rounded-full mr-2"></span>
          <span>{language === 'fr' ? 'Végétarien' : 'Vegetarian'}</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-4 h-4 bg-red-500/20 rounded-full mr-2"></span>
          <span>{language === 'fr' ? 'Épicé' : 'Spicy'}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;
