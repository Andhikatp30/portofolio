import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel, FaNodeJs, FaPhp, FaSquareJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="my-20 text-center text-5xl font-bold text-white"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <RiReactjsLine className="text-5xl" style={{ color: "#61DAFB" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaLaravel className="text-5xl" style={{ color: "#FF2D20" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaNodeJs className="text-5xl" style={{ color: "#68A063" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaSquareJs className="text-5xl" style={{ color: "#F7DF1E" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaPhp className="text-5xl" style={{ color: "#777BB4" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <SiMysql className="text-5xl" style={{ color: "#00758F" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
