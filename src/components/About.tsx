import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const experiences = [
    {
      icon: GraduationCap,
      title: 'Computer Science Engineering',
      subtitle: 'New Horizon College of Engineering',
      description: 'Currently pursuing my undergraduate degree with a strong focus on software development, problem-solving, and modern technologies like AI, machine learning, and full-stack development.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Briefcase,
      title: 'Generative AI Workshop ',
      subtitle: 'IIT Dharwad',
      description: 'Participated in a hands-on workshop on Generative AI and Deep Learning organized by IIT Dharwad, where I explored advanced topics such as diffusion models, GANs (Generative Adversarial Networks), and transformers.Worked closely with researchers and mentors to understand the underlying principles of neural networks and how they can be used to generate realistic images, text, and audio.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Quantum Hacks',
      subtitle: 'Hackathon Program ',
      description: 'I collaborated with a team to develop an AI-powered finance news assistant that delivers real-time, personalized financial updates. We built and fine-tuned a custom Large Language Model (LLM) and NLP pipeline trained on domain-specific financial datasets to understand and summarize market news. Live data was fetched using Python-based web scraping tools, enabling up-to-date insights for users. The platform featured a chatbot interface for conversational queries, allowing users to interact naturally with the system and receive instant, relevant information. Our solution was praised for its innovation, responsiveness, and real-world applicability in financial decision-making.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: MapPin,
      title: 'Leadership Roles',
      subtitle: 'Mobile Development Club ',
      description: 'As a board member of the Mobile Development Club at New Horizon College of Engineering, I actively contributed to organizing and hosting multiple technical events, including a college-wide coding competition during the ISTE Tech Fest. I also played a key role in planning and managing various workshops, hackathons, and app development challenges aimed at fostering a strong coding culture on campus and encouraging student participation in tech innovation.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
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
            About{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate Computer Science student with a keen interest in software development, 
            artificial intelligence, and creating innovative solutions that make a difference.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 h-full">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${experience.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
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
                      <experience.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {experience.title}
                    </h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent mb-3`}>
                      {experience.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Quote */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-200 italic mb-4">
              "Innovation distinguishes between a leader and a follower."
            </blockquote>
            <p className="text-gray-400">- Steve Jobs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;