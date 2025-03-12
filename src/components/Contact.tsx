import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Adresse</h3>
                  <p>139 rue de Bourgogne<br />Orléans<br />(Juste en face du restaurant gastronomique LE GAULOIS)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Téléphone</h3>
                  <p>06 51 04 25 35<br />09 73 27 07 21</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Horaires</h3>
                  <p>Lundi - Mercredi: soir uniquement<br />Jeudi - Samedi: midi et soir<br />Midi sur réservation pour les groupes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Car className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Parking</h3>
                  <p>Parking de la Cathédrale<br />Parking Charpenterie<br />Parking des Halles</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-dark/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-dark/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-dark/50"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;