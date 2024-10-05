import aboutImg from "../assets/profile.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mt-20 text-center text-5xl font-bold text-white"
      >
        About <span className="text-purple-500">Me</span>
      </motion.h1>
      <div className="flex flex-col lg:flex-row lg:items-center mt-12">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 lg:p-4"
        >
          <div className="flex justify-center lg:justify-start">
            <img
              src={aboutImg}
              alt="about"
              className="max-w-xs lg:max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 lg:p-4"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-6 max-w-xl text-neutral-300 leading-relaxed text-lg lg:text-left text-center">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
