import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  // Use a state to store image paths that will have the base path prepended
  const [imagePaths, setImagePaths] = useState<{url: string, alt: string}[]>([]);
  
  useEffect(() => {
    // Get the base path from import.meta.env or use '/purepassion' for GitHub Pages
    const basePath = import.meta.env.BASE_URL || '/purepassion';
    
    // Images with proper paths for deployment
    const images = [
      {
        url: `${basePath}/img/01.jpg`,
        alt: 'Plat traditionnel marocain'
      },
      {
        url: `${basePath}/img/02.jpg`,
        alt: 'Intérieur du restaurant'
      },
      {
        url: `${basePath}/img/03.jpg`,
        alt: 'Couscous royal'
      },
      {
        url: `${basePath}/img/04.jpg`,
        alt: 'Thé à la menthe'
      },
      {
        url: `${basePath}/img/06.jpg`,
        alt: 'Pâtisseries marocaines'
      },
      {
        url: `${basePath}/img/07.jpg`,
        alt: 'Plat marocain spécial'
      },
      {
        url: `${basePath}/img/08.jpg`,
        alt: 'Ambiance du restaurant'
      },
      {
        url: `${basePath}/img/09.jpg`,
        alt: 'Dessert marocain'
      },
      {
        url: `${basePath}/img/10.jpg`,
        alt: 'Plat du jour'
      },
      {
        url: `${basePath}/img/11.jpg`,
        alt: 'Spécialité de la maison'
      }
    ];
    
    setImagePaths(images);
  }, []);

  return (
    <section id="gallery" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('gallery.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagePaths.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;