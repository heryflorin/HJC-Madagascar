
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const Section = lazy(()=>import('./components/Section'));

function App() {
  const aboutCards = [
    {title:"Équipe HJC", description:"Notre équipe dédiée.", img:"https://via.placeholder.com/350x220.webp"},
    {title:"Bureaux HJC", description:"Nos bureaux modernes.", img:"https://via.placeholder.com/350x220.webp"}
  ];
  const servicesCards = [
    {title:"Fournitures de bureau", description:"Stylos, papiers, meubles...", img:"https://via.placeholder.com/350x220.webp"},
    {title:"Matériel informatique", description:"PC, imprimantes, accessoires...", img:"https://via.placeholder.com/350x220.webp"}
  ];
  const productsCards = [
    {title:"Ordinateurs", description:"PC portables et fixes", img:"https://via.placeholder.com/350x220.webp"},
    {title:"Téléphones", description:"Smartphones et accessoires", img:"https://via.placeholder.com/350x220.webp"}
  ];
  const activitiesCards = [
    {title:"Installation", description:"Mise en place de matériel", img:"https://via.placeholder.com/350x220.webp"},
    {title:"Maintenance", description:"Support technique et suivi", img:"https://via.placeholder.com/350x220.webp"}
  ];

  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Suspense fallback={<p className="text-center mt-10">Chargement...</p>}>
        <Section id="apropos" title="À propos de HJC Madagascar" content="HJC Madagascar est spécialisé dans la fourniture de matériels et équipements professionnels." cards={aboutCards}/>
        <Section id="services" title="Services" content="Découvrez nos services adaptés à vos besoins." cards={servicesCards}/>
        <Section id="produits" title="Produits" content="Nos produits de qualité pour votre entreprise." cards={productsCards}/>
        <Section id="activites" title="Activités" content="Nos principales activités et interventions." cards={activitiesCards}/>
        <Section id="catalogue" title="Catalogue PDF" content="Téléchargez notre catalogue complet en PDF."/>
        <Section id="devis" title="Demande de devis" content="Remplissez le formulaire pour obtenir un devis personnalisé."/>
      </Suspense>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
