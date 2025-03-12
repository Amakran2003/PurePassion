import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Pure Passion</h3>
            <p className="mb-4">Traiteur marocain authentique au cœur d'Orléans.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Horaires</h3>
            <p>Lundi - Mercredi: soir uniquement</p>
            <p>Jeudi - Samedi: midi et soir</p>
            <p>Midi sur réservation pour les groupes</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Contact</h3>
            <p>139 rue de Bourgogne</p>
            <p>Orléans</p>
            <p>06 51 04 25 35 / 09 73 27 07 21</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Pure Passion. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;