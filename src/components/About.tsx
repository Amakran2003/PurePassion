import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Histoire</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              Le traiteur Pure Passion est un traiteur marocain situé au cœur du vieux centre-ville d'Orléans, dans la rue de Bourgogne.
            </p>
            <p className="text-lg mb-4">
              C'est en 1997 que M. et Mme Bennis ouvrent leur 1er restaurant : grâce à leur savoir-faire, ils vous feront découvrir une cuisine orientale authentique et colorée, mais aussi une cuisine occidentale riche et savoureuse.
            </p>
            <p className="text-lg">
              Tous nos plats et préparations sont faits maison avec des produits frais. Couscous tajines à emporter sur commande, et service traiteur pour organiser un repas marocain chez soi.
            </p>
          </div>
          <div className="relative h-[300px] md:h-full min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80"
              alt="Intérieur du restaurant Pure Passion"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;