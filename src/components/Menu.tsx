import { motion } from 'framer-motion';

const Menu = () => {
  return (
    <section id="menu" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Carte</h2>
        <p className="mb-6 text-lg">Tous nos plats et préparations sont faits maison avec des produits frais.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Spécialités</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium">Couscous Marocain</h4>
                  <p className="text-sm opacity-75">Semoule fine, légumes de saison, viandes au choix</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Tajines Traditionnels</h4>
                  <p className="text-sm opacity-75">Plusieurs variétés: agneau, poulet, légumes</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Pastilla</h4>
                  <p className="text-sm opacity-75">Feuilles de brick, garniture au choix, amandes</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Mezze & Entrées</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium">Assortiment de Mezze</h4>
                  <p className="text-sm opacity-75">Houmous, caviar d'aubergine, zaalouk</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Briouates</h4>
                  <p className="text-sm opacity-75">Au fromage, à la viande ou aux légumes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Grillades</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium">Brochettes Variées</h4>
                  <p className="text-sm opacity-75">Kefta, poulet, agneau</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Merguez Maison</h4>
                  <p className="text-sm opacity-75">Épicées et grillées à la perfection</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Pâtisseries & Boissons</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium">Pâtisseries Orientales</h4>
                  <p className="text-sm opacity-75">Cornes de gazelle, makroud, baklava</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Thé à la Menthe</h4>
                  <p className="text-sm opacity-75">Thé vert, menthe fraîche, sucre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-secondary-light rounded-lg text-center">
          <p className="text-primary font-semibold">Couscous et tajines à emporter: Des frais d'emballage s'appliquent en dessous de 4 personnes.</p>
          <p className="italic mt-2">Tous nos prix sont justifiés par la qualité et la quantité de nos produits.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;