
import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const Section = ({ id, title, content, cards }) => (
  <motion.section 
    id={id} 
    className="max-w-6xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg"
    initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true }}
    transition={{ duration:0.8 }}
  >
    <h2 className="text-2xl font-bold text-blue-900 mb-4">{title}</h2>
    <p className="mb-6">{content}</p>
    {cards && <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {cards.map((c,i)=><Card key={i} {...c}/>)}
    </div>}
  </motion.section>
);

export default Section;
