
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.div 
    id="accueil"
    initial={{ scale: 0.95, opacity:0 }}
    animate={{ scale:1, opacity:1 }}
    transition={{ duration:1 }}
    className="h-[420px] flex flex-col justify-center items-center text-white text-center bg-cover bg-center" 
    style={{backgroundImage:"url('https://via.placeholder.com/1400x500.webp')", textShadow:"0 2px 7px rgba(0,0,0,0.6)"}}
  >
    <h2 className="text-4xl font-bold">Fournitures – Matériels – Technologies</h2>
    <p className="text-lg mt-2">Solutions professionnelles à Madagascar</p>
  </motion.div>
);

export default Hero;
