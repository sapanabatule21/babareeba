'use client';
import React, { useState } from 'react';

const cocktailsData = [
  { name: 'Forbidden Tropic', desc: 'A complex, milk-clarified masterpiece balancing sharp tropical tang.', img: 'https://www.babareeba.club/assets/6-BNdmjwdK.png' },
  { name: 'Clear Libre', desc: 'An effervescent, CO₂-charged treat with a sparkling vanilla finish.', img: 'https://www.babareeba.club/assets/7-CVPEdtwH.png' },
  { name: 'Cold Ritual', desc: 'Refreshing fusion of bold coffee and creamy nut butter.', img: 'https://www.babareeba.club/assets/8-DG4LWGSW.png' },
  { name: 'Berry & Bean', desc: 'Floral rose and numbing spice with a shifting color spectrum.', img: 'https://www.babareeba.club/assets/9-3agNAuxN.png' },
  { name: 'Passion Eletion', desc: 'Exotic warming spices and tropical tang with a velvety mouthfeel.', img: 'https://www.babareeba.club/assets/10-DQ-gcq3o.png' },
  { name: 'Forest Nector', desc: 'Wood-smoked elixir with cooling melon and anise notes.', img: 'https://www.babareeba.club/assets/11-BSKGjiXZ.png' },
  { name: 'Lucent Heat', desc: 'Tropical fruit and savory forest depth with a velvety cloud.', img: 'https://www.babareeba.club/assets/12-BpAzlXoo.png' },
  { name: 'Blush Cloud', desc: 'Dessert-inspired indulgence with sun-ripened berries.', img: 'https://www.babareeba.club/assets/13-DhtvfIRB.png' },
  { name: 'Aperol Slush', desc: 'Frozen, slush-style celebration of citrus and bubbles.', img: 'https://www.babareeba.club/assets/14-BBjDvnTt.png' },
  { name: 'Nitro Espresso Martini', desc: 'Bold roasted depth meets a hint of salt.', img: 'https://www.babareeba.club/assets/15-CTFoQ50X.png' },
  { name: "Reeba's Hot Toddy", desc: 'Rich, soul-warming blend of dark spirits and aromatic tea.', img: 'https://www.babareeba.club/assets/16-CYWSOGKn.png' }
];

const formattedCocktails = cocktailsData.reduce((acc, current) => {
  acc.push({ name: 'COCKTAILS', isText: true });
  acc.push(current);
  return acc;
}, []);

const menuCategories = [
  {
    id: 'food',
    title: 'FOOD',
    isReverse: false,
    items: [
      { name: 'FOOD', isText: true },
      { name: 'Gourmet Sliders', desc: 'Juicy premium mini burgers with artisan cheese.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80' },
      { name: 'FOOD', isText: true },
      { name: 'Tapas Platter', desc: 'Perfectly seasoned lounge-style dynamic starters.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80' },
      { name: 'FOOD', isText: true },
      { name: 'Artisan Flatbread', desc: 'Freshly baked with exotic toppings and fine herbs.', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80' },
      { name: 'FOOD', isText: true },
      { name: 'Signature Dessert', desc: 'A rich culinary sweet finish to your luxury dine.', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  {
    id: 'cocktails',
    title: 'COCKTAILS',
    isReverse: true,
    items: [
      ...formattedCocktails,
      { name: 'COCKTAILS', isText: true }
    ]
  },
  {
    id: 'ambiance',
    title: 'AMBIANCE',
    isReverse: false,
    items: [
      { name: 'AMBIANCE', isText: true },
      { name: 'Main Bar Counter', desc: 'Where the premium mixology magic happens.', img: 'https://www.babareeba.club/assets/portfolio-10-Davww4zy.png' },
      { name: 'AMBIANCE', isText: true },
      { name: 'Premium Bar Lounge', desc: 'Sophisticated design crafted for beautiful nights.', img: 'https://www.babareeba.club/assets/portfolio-8-_OF5oWFU.png' },
      { name: 'AMBIANCE', isText: true },
      { name: 'Luxury Spirit Display', desc: 'Exquisite neon backlighting showcasing elite liquor collections.', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=80' },
      { name: 'AMBIANCE', isText: true },
      { name: 'Elegant Bar Stools', desc: 'Perfect minimalist aesthetic seating arrangements.', img: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=500&q=80' }
    ]
  }
];

const AccordionMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <style>{`
        @keyframes customMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes customMarqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
        }
      `}</style>

      <section className="bg-neutral-950 text-white min-h-screen py-12">
        <div className="w-full mx-auto">
          {menuCategories.map((cat) => {
            const isOpen = activeCategory === cat.id;

            return (
              <div 
                key={cat.id} 
                className="border-b border-neutral-900 transition-colors duration-300"
                onMouseEnter={() => setActiveCategory(cat.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                
                <div className="w-full py-10 text-center block relative cursor-pointer select-none">
                  <h2 className={`text-6xl md:text-8xl font-serif font-bold uppercase tracking-tighter transition-all duration-350 ${isOpen ? 'text-white scale-102' : 'text-neutral-700'}`}>
                    {cat.title}
                  </h2>
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xs text-neutral-800 tracking-widest uppercase hidden md:inline">{cat.title}</span>
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-neutral-800 tracking-widest uppercase hidden md:inline">{cat.title}</span>
                </div>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '240px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? '32px' : '0px'
                  }}
                >
                  <div className="w-full overflow-hidden">
                    <div
                      className="marquee-track"
                      style={{
                        animation: `${cat.isReverse ? 'customMarqueeReverse' : 'customMarquee'} ${cat.id === 'cocktails' ? '38s' : '30s'} linear infinite`
                      }}
                    >
                      {[...cat.items, ...cat.items].map((item, i) => (
                        <div
                          key={i}
                          className="flex-shrink-0 w-[160px] h-[100px] md:w-[320px] md:h-[180px] rounded-xl overflow-hidden border border-neutral-900 bg-neutral-900 relative group shadow-2xl"
                        >
                          {item.isText ? (
                            <div className="w-full h-full flex items-center justify-center bg-white text-black px-4">
                              <span className="text-lg md:text-2xl font-serif font-black tracking-widest uppercase text-center select-none">
                                {item.name}
                              </span>
                            </div>
                          ) : (
                            <>
                              <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent w-full">
                                <h4 className="text-white text-xs md:text-base font-bold mb-0.5">{item.name}</h4>
                                <p className="text-neutral-400 text-[9px] md:text-xs overflow-hidden text-ellipsis whitespace-normal line-clamp-1 md:line-clamp-2">{item.desc}</p>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AccordionMenu;