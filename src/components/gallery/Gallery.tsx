import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  
  // Liste vérifiée d'images Unsplash qui fonctionnent correctement
  const images = [
    {
      url: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Tajine marocain traditionnel"
    },
    {
      url: "https://images.unsplash.com/photo-1610229545708-4ea9d0bc416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Intérieur restaurant marocain"
    },
    {
      url: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Buffet marocain"
    },
    {
      url: "https://images.unsplash.com/photo-1603779702200-ea5a2a15b69d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Thé à la menthe marocain"
    },
    {
      url: "https://images.unsplash.com/photo-1586500036065-8394e8459302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Couscous aux légumes"
    },
    {
      url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Pâtisseries marocaines"
    },
    {
      url: "https://images.unsplash.com/photo-1567188040759-fb8a254b3128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Épices marocaines"
    },
    {
      url: "https://images.unsplash.com/photo-1567188040759-fb8a254b3128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Décoration marocaine"
    }
  ];

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
          {images.map((image, index) => (
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
                loading="lazy"
                onError={(e) => {
                  // Ajouter un fallback en cas d'erreur de chargement
                  e.currentTarget.src = "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;