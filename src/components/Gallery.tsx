import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      url: '/img/01.jpg',
      alt: 'Plat traditionnel marocain'
    },
    {
      url: '/img/02.jpg',
      alt: 'Intérieur du restaurant'
    },
    {
      url: '/img/03.jpg',
      alt: 'Couscous royal'
    },
    {
      url: '/img/04.jpg',
      alt: 'Thé à la menthe'
    },
    {
      url: '/img/06.jpg',
      alt: 'Pâtisseries marocaines'
    },
    {
      url: '/img/07.jpg',
      alt: 'Plat marocain spécial'
    },
    {
      url: '/img/08.jpg',
      alt: 'Ambiance du restaurant'
    },
    {
      url: '/img/09.jpg',
      alt: 'Dessert marocain'
    },
    {
      url: '/img/10.jpg',
      alt: 'Plat du jour'
    },
    {
      url: '/img/11.jpg',
      alt: 'Spécialité de la maison'
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Galerie</h2>
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
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;