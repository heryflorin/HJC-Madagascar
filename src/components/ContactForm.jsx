
import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => (
  <motion.form 
    id="contact" 
    className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg my-10"
    initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true }}
    transition={{ duration:0.8 }}
  >
    <h2 className="text-2xl font-bold text-blue-900 mb-4">Contactez-nous</h2>
    <input type="text" placeholder="Nom" className="w-full p-3 rounded mb-4 border"/>
    <input type="email" placeholder="Email" className="w-full p-3 rounded mb-4 border"/>
    <textarea placeholder="Message" className="w-full p-3 rounded mb-4 border"></textarea>
    <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 transition">Envoyer</button>
  </motion.form>
);

export default ContactForm;
