import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const flippingTexts = ["Web Developer", "AI Explorer", "Java Enthusiast"];

  // Auto-rotate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % flippingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const textVariants = {
    enter: {
      y: 30,
      opacity: 0,
      rotateX: -90,
      scale: 0.8,
    },
    center: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
    },
    exit: {
      y: -30,
      opacity: 0,
      rotateX: 90,
      scale: 0.8,
    },
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow Effects */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-cyan-400/15 via-purple-400/15 to-pink-400/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                animate={{
                  rotate: [360, 0],
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-violet-400/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Profile Image Container */}
              <motion.div
                className="relative w-38 h-38 md:w-42 md:h-42 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
                whileHover={{
                  boxShadow: [
                    "0 0 0 0 rgba(168, 85, 247, 0)",
                    "0 0 0 15px rgba(168, 85, 247, 0.1)",
                    "0 0 0 30px rgba(236, 72, 153, 0.05)",
                    "0 0 0 45px rgba(59, 130, 246, 0.02)",
                  ],
                }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src="/src/assets/Generated Image (1).JPEG"
                  alt="Jeet Sarkar"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  whileHover={{
                    filter: [
                      "brightness(1) contrast(1) saturate(1)",
                      "brightness(1.2) contrast(1.1) saturate(1.2)",
                    ],
                  }}
                />

                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-${(i % 2) + 1} h-${
                    (i % 2) + 1
                  } bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100`}
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${10 + i * 15}%`,
                    transform: `rotate(${i * 45}deg) translateX(${
                      20 + i * 5
                    }px)`,
                  }}
                  animate={{
                    y: [-10, -25, -10],
                    x: [-5, 10, -5],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Title with Flipping Text */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Jeet
              </motion.span>
            </motion.h1>

            {/* Flipping Text Container */}
            <div className="mt-4 h-12 md:h-16 lg:h-20 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTextIndex}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                >
                  {flippingTexts[currentTextIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.02 }}
          >
            Computer Science Engineering Student & Aspiring Software Developer
            <br />
            <span className="text-base md:text-lg text-gray-400">
              Building innovative solutions with cutting-edge technology
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.button
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
              <motion.div
                className="w-0 group-hover:w-2 transition-all duration-300"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100"
                />
              </motion.div>
            </motion.button>

            <motion.button
              onClick={scrollToProjects}
              className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 mb-16"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/JeetDev2104",
                label: "GitHub",
                color: "from-gray-600 to-gray-800",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/jeet-sarkar-8ba8412a8/",
                label: "LinkedIn",
                color: "from-blue-600 to-blue-800",
              },
              {
                icon: Mail,
                href: "mailto:tarunsarkar155@gmail.com",
                label: "Email",
                color: "from-red-600 to-red-800",
              },
            ].map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.2, y: -8 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                aria-label={label}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={20} />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
