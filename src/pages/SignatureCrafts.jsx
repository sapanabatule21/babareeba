import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cocktails = [
  { title: "MATCHA MIRAGE", desc: "A vibrant, sous-vide infusion of earthy tea and bright berry sweetness.", image: "https://images.unsplash.com/photo-1634496064950-02f043806b09?w=600&q=80" },
  { title: "ROOTS & FIRE", desc: "A sophisticated, clarified take on earthy roots and bright orchard spice.", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80" },
  { title: "MOONLIGHT BETEL", desc: "A botanical spectacle of aromatic herbs and citrus.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80" },
  { title: "IT'S NOT A PICANTE", desc: "A fiery, agave-hewn fusion of tropical sweetness and warm spice.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80" },
  { title: "CHIKOO CHILLER", desc: "A silky, sous-vide infusion of malted tropical sweetness.", image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?w=600&q=80" },
  { title: "FORBIDDEN TROPIC", desc: "A complex, milk-clarified masterpiece balancing sharp tropical tang.", image: "https://images.unsplash.com/photo-1563223771-375783ee91ad?w=600&q=80" }
];

export default function SignatureCrafts() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <section ref={containerRef} className="h-[200vh] bg-[#1a0003] text-white overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center">
        
        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold uppercase tracking-widest">SIGNATURE CRAFTS</h2>
          <p className="mt-4 text-white/50 tracking-wide">Each pour tells a story. Discover our handcrafted cocktail selection.</p>
        </div>

        <motion.div style={{ x }} className="flex gap-20 px-20">
          {cocktails.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              {/* विनाइल लूक */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-[300px] h-[300px] rounded-full flex items-center justify-center border-4 border-black group-hover:border-[#d4af37]/30 transition-colors"
                style={{ 
                    background: `radial-gradient(circle, #1a1a1a 40%, #000 40%, #000 95%, #1a1a1a 100%)`,
                    boxShadow: "0 0 20px rgba(0,0,0,0.8)"
                }}
              >
                 <img src={item.image} alt={item.title} className="w-[150px] h-[150px] rounded-full object-cover border-2 border-[#333]" />
              </motion.div>
              
              {/* नाव - Hover वर Dark Yellow होईल */}
              <h3 className="mt-8 text-md font-bold uppercase tracking-widest group-hover:text-[#d4af37] transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* डिस्क्रिप्शन - Hover वर दिसेल */}
              <p className="mt-2 text-xs text-white/60 text-center max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div style={{ opacity }} className="absolute bottom-10 w-full text-center">
          <h2 className="text-5xl font-bold uppercase tracking-widest">WHAT THEY SAY'S</h2>
        </motion.div>
        
      </div>
    </section>
  );
}