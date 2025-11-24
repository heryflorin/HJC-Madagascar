
import React from 'react';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-10 px-5 animate-fadeSlide">
    <picture>
      <source srcSet="https://via.placeholder.com/200x90.webp" type="image/webp"/>
      <img src="https://via.placeholder.com/200x90.png" alt="Logo HJC Madagascar" loading="lazy" className="mx-auto"/>
    </picture>
    <h1 className="text-3xl font-bold mt-4">HJC Madagascar</h1>
    <p className="mt-2">Votre partenaire en fournitures et équipements professionnels</p>
  </header>
);

export default Header;
