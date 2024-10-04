import aboutImg from "../assets/profile.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        duration={{ duration: 1.5 }}
        className="mt-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-2">
          <div className="flex justify-center lg:justify-start">
            <img
              src={aboutImg}
              alt="about"
              className="max-w-xs lg:max-w-md rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-wxl py-6 leading-relaxed">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
