import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Award,
      title: 'St. John Berchman Master Award',
      description: 'Highest academic honor for outstanding performance and leadership excellence.',
      year: '2023',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Medal,
      title: 'Cyber Olympiad Participant',
      description: 'National level competition School Level in programming challenges.',
      year: '2018',
      gradient: 'from-blue-400 to-purple-500',
    },
    {
      icon: Trophy,
      title: 'Secured 2nd Place in Inter-House 400m Sprint Race',
      description: 'Runner-up in the 400m sprint at the Inter-House Athletics Meet, showcasing speed, endurance, and competitive spirit.',
      year: '2019',
      gradient: 'from-green-400 to-teal-500',
    },
    {
      icon: Star,
      title: 'IIT Dharwad Research Excellence',
      description: 'Recognition for outstanding contribution to Generative AI research projects.',
      year: '2024',
      gradient: 'from-pink-400 to-red-500',
    },
  ];

  const stats = [
    { number: '8+', label: 'Projects Completed', gradient: 'from-blue-400 to-cyan-400' },
    { number: 'Seeking', label: 'Internships', gradient: 'from-purple-400 to-pink-400' },
    { number: '5+', label: 'Awards Received', gradient: 'from-green-400 to-emerald-400' },
    { number: 'Open', label: 'Years Experience', gradient: 'from-orange-400 to-red-400' },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
      
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
          >
            Achievements &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Recognition
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Milestones and recognition that reflect my dedication to excellence and continuous learning
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <motion.div
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 h-full">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        transition: { 
                          duration: 0.6, 
                          ease: "easeInOut" 
                        }
                      }}
                      className="flex items-center justify-center"
                    >
                      <achievement.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {achievement.title}
                      </h3>
                      <span className={`text-sm font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to create something amazing together?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's connect and discuss how we can bring your ideas to life with innovative solutions.
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;