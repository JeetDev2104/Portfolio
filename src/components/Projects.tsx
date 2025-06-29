import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Zap,
  Code,
  Palette,
} from "lucide-react";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "StayEase",
      description:
        "A comprehensive hotel booking platform with real-time availability, secure payments, and user-friendly interface.",
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "RestFul API",
        "Passport.js",
        "EJS Template",
        "Cloudinary",
        "Joi",
      ],
      github: "https://github.com/JeetDev2104/Airbnb",
      demo: "https://lnkd.in/dRHDz5KT",
      stars: 24,
      forks: 8,
      gradient: "from-blue-500 to-cyan-500",
      icon: Code,
    },
    {
      title: "NewsFinanceLetter",
      description:
        "Built a real-time finance news app that scrapes live data directly from trusted financial websites, avoiding reliance on the Google News API.Integrated a custom-trained NLP chatbot.Users can interact naturally with the chatbot to get instant, relevant financial insights from real-time news sources",
      image:
        "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "Flask", "Chart.js"],
      github: "https://github.com/JeetDev2104/34Paradox",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7322362337674387458/",
      stars: 18,
      forks: 5,
      gradient: "from-green-500 to-emerald-500",
      icon: Zap,
    },
    {
      title: "Solar Simulation",
      description:
        "Interactive 3D solar system simulation with realistic physics and educational content.",
      image: "/assets/Solar.png",
      technologies: ["Three.js", "HTML", "JavaScript", "CSS3"],
      github: "https://github.com/JeetDev2104/Solar-System",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7236423879638822915/",
      stars: 32,
      forks: 12,
      gradient: "from-purple-500 to-pink-500",
      icon: Palette,
    },
    {
      title: "AI Chatbot",
      description:
        "Intelligent conversational AI with natural language processing and context awareness.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "NLP", "OpenAI API", "React"],
      github: "#",
      demo: "#",
      stars: 45,
      forks: 15,
      gradient: "from-orange-500 to-red-500",
      icon: Code,
    },
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
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"></div>

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
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.02 }}
          >
            A showcase of my recent work, featuring innovative solutions and
            cutting-edge technologies
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 relative">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    whileHover={{
                      filter: "brightness(1.1) contrast(1.1) saturate(1.2)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Floating Icon */}
                  <motion.div
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Overlay buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.a
                      href={project.github}
                      className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <motion.h3
                      className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Star size={14} />
                        <span>{project.stars}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <GitFork size={14} />
                        <span>{project.forks}</span>
                      </motion.div>
                    </div>
                  </div>

                  <motion.p
                    className="text-gray-300 mb-4 leading-relaxed"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-200 border border-white/20"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/JeetDev2104" // Replace with your GitHub profile or repo link
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <ExternalLink size={16} />
              </motion.div>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
