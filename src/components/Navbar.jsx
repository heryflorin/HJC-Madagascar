
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = ["Accueil","Services","Produits","Activités","Catalogue PDF","Devis","Contact"];
  return (
    <>
      <nav className="sticky top-0 bg-blue-900 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="text-white font-bold text-lg">HJC Madagascar</div>
          <div className="hidden md:flex gap-6">
            {menuItems.map(item => (
              <Link key={item} to={item.toLowerCase()} smooth duration={500} className="text-white font-semibold hover:text-yellow-400 cursor-pointer">{item}</Link>
            ))}
          </div>
          <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={()=>setOpen(!open)}>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${open?"rotate-45 translate-y-1.5":""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${open?"opacity-0":""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${open?"-rotate-45 -translate-y-1.5":""}`}></span>
          </div>
        </div>
      </nav>
      <div className={`fixed top-0 right-0 w-64 h-full bg-blue-900 transform transition-transform ${open?"translate-x-0":"translate-x-full"} md:hidden z-40 flex flex-col pt-20 px-4 gap-6`}>
        {menuItems.map(item => (
          <Link key={item} to={item.toLowerCase()} smooth duration={500} className="text-white font-semibold hover:text-yellow-400 cursor-pointer" onClick={()=>setOpen(false)}>{item}</Link>
        ))}
      </div>
      {open && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" onClick={()=>setOpen(false)}></div>}
    </>
  );
};

export default Navbar;
