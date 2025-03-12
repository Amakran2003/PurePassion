import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Bea T.',
      text: 'Le meilleur couscous et de loin !! Nous avons pris un coucous poulet et un agneau + merguez Quel régal !! Très bien assaisonné, du parfum, du goût !!! Plus l\'amabilité du personnel A y retourner vite :-)',
      rating: 5
    },
    {
      name: 'Lucie F.',
      text: 'Couscous royal !!! Nous avions envie de manger un couscous... nous ne sommes pas du tout déçu !! Une semoule ultra fine, des légumes savoureux, les viandes délicieuses, sans oublier les petits raisins !! Et un service très agréable pour finir, nous reviendrons gouter d\'autres plats',
      rating: 5
    },
    {
      name: 'S0phiepaine',
      text: 'Excellent ! Plats savoureux, service tres aimable et bien situe sur une des plus belles rues pietonnes de la ville.',
      rating: 5
    },
    {
      name: 'JACOSTEPH',
      text: 'Un bon moment. Rentré par hasard, nous avons passé un super moment. Un tajine agneaux poire amande exemplaire. Un très bon moment.',
      rating: 5
    },
    {
      name: 'P45560',
      text: 'Belle découverte. Nous etions naufragés... le restaurant où je souhaitais aller diner était fermé depuis...plusieurs années. Nous avons marché sans trop savoir où aller. Une amie a eu la fabuleuse idée de consulter internet pour trouver un restaurant oriental ouvert. Nous avons donc appelé très tardivement le restaurant Pure Passion et ils nous ont accepté après 22h. Nous avons découvert une cuisine marocaine très riche en saveur et un accueil des plus chaleureux. Sûr, nous reviendrons et nous en parlons. Très belle année à Pure Passion.',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute" as const
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
      zIndex: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute" as const
    })
  };

  return (
    <section id="testimonials" className="section-container bg-secondary-light py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Avis Clients</h2>
        
        <div className="relative">
          {/* Container with fixed height */}
          <div className="overflow-hidden relative bg-white p-8 rounded-lg shadow-lg">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-6 text-lg italic text-center">"{testimonials[currentIndex].text}"</p>
                <p className="font-semibold text-center text-primary">- {testimonials[currentIndex].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Dots indicator - moved directly under the testimonial box */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;