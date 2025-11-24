
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, img }) => (
  <motion.div whileHover={{ scale:1.05 }} className="bg-white p-4 rounded-xl shadow-md transition-shadow">
    <img src={img} alt={title} loading="lazy" className="rounded-xl mb-3"/>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

export default Card;
