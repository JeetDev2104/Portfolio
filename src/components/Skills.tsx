import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500', icon: '⚡' },
    { name: 'Java', level: 85, color: 'from-blue-400 to-blue-600', icon: '🔷' },
    { name: 'React', level: 88, color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
    { name: 'Node.js', level: 82, color: 'from-green-400 to-green-600', icon: '🟢' },
    { name: 'Python', level: 85, color: 'from-yellow-300 to-blue-500', icon: '🐍' },
    { name: 'Generative AI', level: 78, color: 'from-purple-400 to-pink-500', icon: '🤖' },
    { name: 'Database Design', level: 80, color: 'from-indigo-400 to-purple-500', icon: '🗄️' },
    { name: 'Git & Version Control', level: 85, color: 'from-orange-400 to-red-500', icon: '📚' },
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL',
    'Java', 'JavaScript', 'Python', 'TensorFlow', 'PyTorch', 'C++',
    'C', 'Git', 'Linux', 'HTML', 'Tailwind CSS', 'Framer Motion', 'Prompt Engineering'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Skills &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.02 }}
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </motion.div>

        {/* Skills Progress Bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 group"
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <motion.span 
                    className="text-2xl"
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <motion.h3 
                    className="text-lg font-semibold text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.h3>
                </div>
                <motion.span 
                  className="text-sm text-gray-300 font-bold"
                  whileHover={{
                    scale: 1.1,
                    color: "#ffffff",
                  }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden relative">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    boxShadow: `0 0 20px rgba(168, 85, 247, 0.5)`,
                    scale: 1.02,
                  }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Cloud */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-8 text-white"
            whileHover={{ scale: 1.05 }}
          >
            Technologies I Work With
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-gray-200 border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 cursor-default"
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;