import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="my-16 text-center text-5xl font-bold text-white">
        Projects
      </motion.h1>
      <div className="flex flex-col items-center space-y-10">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="w-full max-w-5xl flex flex-wrap lg:justify-between items-center border-b border-neutral-800 pb-6"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/3 mb-6 lg:mb-0 flex justify-center lg:justify-start"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  width={350}
                  height={250}
                  alt={project.title}
                  className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-2/3 max-w-xl lg:pl-10"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h6 className="text-2xl font-semibold text-white mb-3 hover:text-purple-500 transition-colors duration-300 ease-in-out">
                  {project.title}
                </h6>
              </a>
              <p className="mb-4 text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-3 mt-2 rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
