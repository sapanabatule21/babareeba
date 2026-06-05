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

const menuCategories = [
  {
    id: 'food',
    title: 'FOOD',
    isReverse: false,
    items: [
      { name: 'FOOD', isText: true },
      { name: 'Signature Dish 1', desc: 'Delicious premium lounge culinary craft.', img: 'https://www.babareeba.club/assets/portfolio-2-B9bJUlp2.png' },
      { name: 'FOOD', isText: true },
      { name: 'Signature Dish 2', desc: 'Finest ingredients cooked to perfection.', img: 'https://www.babareeba.club/assets/portfolio-3-nQa-6nt-.png' },
      { name: 'FOOD', isText: true },
      { name: 'Signature Dish 3', desc: 'Exquisite plating and ultimate taste.', img: 'https://www.babareeba.club/assets/portfolio-5-BiZJQZAo.png' },
    ]
  },
  {
    id: 'cocktails',
    title: 'COCKTAILS',
    isReverse: true,
    items: [
      { name: 'COCKTAILS', isText: true },
      ...cocktailsData,
      { name: 'COCKTAILS', isText: true }
    ]
  },
  {
    id: 'ambiance',
    title: 'AMBIANCE',
    isReverse: false,
    items: [
      { name: 'AMBIANCE', isText: true },
      { name: 'Lounge Area', desc: 'Premium luxury seating experience.', img: 'https://www.babareeba.club/assets/portfolio-9-vQTu5WP1.png' },
      { name: 'AMBIANCE', isText: true },
      { name: 'Bar Counter', desc: 'Where the magic happens.', img: 'https://www.babareeba.club/assets/portfolio-10-Davww4zy.png' },
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
          gap: 16px; /* गॅप थोडा कमी केला आहे */
          width: max-content;
        }
      `}</style>

      <section className="bg-neutral-950 text-white min-h-screen py-12">
        <div className="w-full mx-auto">
          {menuCategories.map((cat) => {
            const isOpen = activeCategory === cat.id;

            return (
              <div key={cat.id} className="border-b border-neutral-800">
                {/* हेडिंग बटन */}
                <button
                  onClick={() => setActiveCategory(isOpen ? null : cat.id)}
                  className="w-full py-12 text-center block focus:outline-none relative"
                >
                  <h2 className={`text-6xl md:text-8xl font-serif font-bold uppercase tracking-tighter transition-all duration-350 ${isOpen ? 'text-neutral-400' : 'text-white'}`}>
                    {cat.title}
                  </h2>
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xs text-neutral-600 tracking-widest uppercase hidden md:inline">{cat.title}</span>
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-neutral-600 tracking-widest uppercase hidden md:inline">{cat.title}</span>
                </button>

                {/* इमेज गॅलरी सेक्शन */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '450px' : '0px', // उंची कमी केली
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? '32px' : '0px'
                  }}
                >
                  <div className="w-full overflow-hidden">
                    <div
                      className="marquee-track"
                      style={{
                        animation: `${cat.isReverse ? 'customMarqueeReverse' : 'customMarquee'} 30s linear infinite`
                      }}
                    >
                      {[...cat.items, ...cat.items].map((item, i) => (
                        <div
                          key={i}
                          /* इमेजची साईझ इथे लहान केली आहे: मोबाईलवर w-[220px] h-[300px] आणि मोठ्या स्क्रीनवर w-[280px] h-[360px] */
                          className="flex-shrink-0 w-[220px] h-[300px] md:w-[280px] md:h-[360px] rounded-xl overflow-hidden border border-neutral-900 bg-neutral-900 relative group shadow-2xl"
                        >
                          {item.isText ? (
                            /* पांढरे टेक्स्ट कार्ड */
                            <div className="w-full h-full flex items-center justify-center bg-white text-black px-4">
                              <span className="text-3xl md:text-4xl font-serif font-black tracking-widest uppercase text-center select-none">
                                {item.name}
                              </span>
                            </div>
                          ) : (
                            /* इमेज कार्ड */
                            <>
                              <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent w-full">
                                <h4 className="text-white text-lg font-bold mb-0.5">{item.name}</h4>
                                <p className="text-neutral-400 text-xs overflow-hidden text-ellipsis whitespace-normal line-clamp-2">{item.desc}</p>
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