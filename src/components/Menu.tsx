import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import MenuFilter from './menu/MenuFilter';
import MenuCategory from './menu/MenuCategory';
import { MenuItemProps } from './menu/MenuItem';

// Types pour notre menu
interface MenuCategory {
  titleKey: string;
  items: Omit<MenuItemProps, 'formatPrice' | 'index'>[];
}

const Menu = () => {
  const { t, language } = useLanguage();
  const [openCategory, setOpenCategory] = useState<string | null>("menu.specialties");
  const [priceFilter, setPriceFilter] = useState<number>(50);
  
  // Données du menu avec prix
  const menuData: MenuCategory[] = [
    {
      titleKey: 'menu.specialties',
      items: [
        {
          titleKey: 'menu.couscous',
          descriptionKey: 'menu.couscous.description',
          price: 18.90,
          isChefChoice: true
        },
        {
          titleKey: 'menu.tajines',
          descriptionKey: 'menu.tajines.description',
          price: 17.50
        },
        {
          titleKey: 'menu.pastilla',
          descriptionKey: 'menu.pastilla.description',
          price: 16.90
        }
      ]
    },
    {
      titleKey: 'menu.mezze.title',
      items: [
        {
          titleKey: 'menu.mezze.assortment',
          descriptionKey: 'menu.mezze.description',
          price: 14.50,
          isVegetarian: true
        },
        {
          titleKey: 'menu.briouates',
          descriptionKey: 'menu.briouates.description',
          price: 9.90
        }
      ]
    },
    {
      titleKey: 'menu.grills',
      items: [
        {
          titleKey: 'menu.skewers',
          descriptionKey: 'menu.skewers.description',
          price: 19.90,
          isSpicy: true
        },
        {
          titleKey: 'menu.merguez',
          descriptionKey: 'menu.merguez.description',
          price: 15.50,
          isSpicy: true
        }
      ]
    },
    {
      titleKey: 'menu.pastries.title',
      items: [
        {
          titleKey: 'menu.pastries',
          descriptionKey: 'menu.pastries.description',
          price: 8.50,
          isVegetarian: true
        },
        {
          titleKey: 'menu.tea',
          descriptionKey: 'menu.tea.description',
          price: 4.50,
          isVegetarian: true
        }
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(price);
  };

  const toggleCategory = (categoryKey: string) => {
    setOpenCategory(openCategory === categoryKey ? null : categoryKey);
  };

  // Filtrer les plats en fonction du prix
  const filteredMenu = menuData.map(category => ({
    ...category,
    items: category.items.filter(item => item.price <= priceFilter)
  }));

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
        
        {/* Filtre par prix */}
        <MenuFilter 
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          formatPrice={formatPrice}
        />
        
        {/* Catégories du menu en accordéon */}
        <div className="space-y-4">
          {filteredMenu.map((category) => (
            <MenuCategory
              key={category.titleKey}
              titleKey={category.titleKey}
              items={category.items}
              isOpen={openCategory === category.titleKey}
              onToggle={() => toggleCategory(category.titleKey)}
              formatPrice={formatPrice}
            />
          ))}
        </div>
        
        {/* Note en bas de menu */}
        <div className="mt-8 p-4 bg-secondary-light rounded-lg text-center">
          <p className="text-primary font-semibold">{t('menu.packaging.notice')}</p>
          <p className="italic mt-2">{t('menu.price.notice')}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;