
import React from 'react';

const Footer = () => (
  <footer className="bg-blue-900 text-white py-10 px-5">
    <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4">
      <div>
        <h3 className="font-bold text-lg mb-2">HJC Madagascar</h3>
        <p>Fournitures de bureau, matériels informatiques, électroniques, téléphoniques et mobiliers professionnels.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Liens rapides</h4>
        <ul className="space-y-1">
          {["Accueil","Services","Produits","Devis","Contact"].map(link=><li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-yellow-400">{link}</a></li>)}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Contact</h4>
        <p>Adresse : Antananarivo, Madagascar</p>
        <p>Téléphone : +261 34 43 969 68</p>
        <p>Email : <a href="mailto:hjc.madagascar@gmail.com" className="hover:text-yellow-400">hjc.madagascar@gmail.com</a></p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Réseaux sociaux</h4>
        <p>Facebook | LinkedIn | WhatsApp</p>
      </div>
    </div>
    <p className="text-center mt-8 text-sm">© 2025 HJC Madagascar – Tous droits réservés.</p>
  </footer>
);

export default Footer;
