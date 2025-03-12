import { motion } from 'framer-motion';

const Catering = () => {
  return (
    <section id="catering" className="section-container bg-secondary-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Service Traiteur</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80" 
              alt="Service Traiteur" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              Vous avez décidé de vous marier, repas d'affaires, anniversaires, baptême, repas entre collègues ou familles et vous imaginez déjà ce jour exceptionnel. Pour vous éviter les contraintes liées aux repas, Pure Passion vous propose de prendre en charge l'organisation du repas de votre évènement.
            </p>
            <p className="text-lg">
              En tant que traiteur expérimenté, les membres de l'équipe de Pure Passion sauront répondre à vos besoins et proposer des prestations à la hauteur de vos exigences afin de créer un repas sur mesure.
            </p>
            <p className="text-lg">
              Pure Passion sera comme le chef d'orchestre de votre événement : vous lui exposez vos envies, vos critères, vos contraintes, votre budget. Il sélectionnera pour vous les meilleurs prestataires de vos évènements, vous donnera des idées, trouvera des solutions à vos contraintes, il est là pour vous faciliter les préparatifs et vous faire gagner du temps.
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <a href="/contact" className="btn-primary">
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Catering;
