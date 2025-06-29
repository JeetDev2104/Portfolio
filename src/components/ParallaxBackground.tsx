import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-3 h-3 bg-purple-400/40 rounded-full"
          style={{
            top: '20%',
            left: '10%',
            y: scrollY * -0.5,
          }}
          animate={{
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute w-4 h-4 bg-pink-400/30 rounded-full"
          style={{
            top: '60%',
            right: '15%',
            y: scrollY * -0.3,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute w-2 h-2 bg-blue-400/50 rounded-full"
          style={{
            top: '40%',
            left: '80%',
            y: scrollY * -0.7,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        <motion.div
          className="absolute w-2.5 h-2.5 bg-cyan-400/35 rounded-full"
          style={{
            top: '80%',
            left: '30%',
            y: scrollY * -0.4,
          }}
          animate={{
            opacity: [0.35, 0.8, 0.35],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        
        <motion.div
          className="absolute w-1.5 h-1.5 bg-green-400/45 rounded-full"
          style={{
            top: '25%',
            right: '40%',
            y: scrollY * -0.6,
          }}
          animate={{
            opacity: [0.45, 0.9, 0.45],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Additional floating elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              y: scrollY * (-0.2 - i * 0.05),
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1.2, 0.5],
              x: [0, Math.sin(i) * 20, 0],
              y: [0, Math.cos(i) * 15, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          y: scrollY * -0.1,
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
      
      {/* Additional depth layers */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"
        style={{
          y: scrollY * -0.2,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;