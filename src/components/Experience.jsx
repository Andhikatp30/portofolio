import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="my-10 text-center text-5xl font-bold text-white"
      >
        Experience
      </motion.h1>
      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="flex flex-wrap lg:justify-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-10"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-1/4 font-semibold"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-2/4"
            >
              <h6 className="mb-2 text-2xl font-semibold text-white">
                {experience.role}{" "}
                <span className="text-sm text-purple-300">
                  - {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 leading-relaxed">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400"
                  >
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

export default Experience;
