import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 p-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="my-10 text-center text-5xl font-bold text-white"
      >
        Contact
      </motion.h1>
      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="my-4 text-xl text-neutral-400"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="my-4 text-xl text-neutral-400"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          href={`mailto:${CONTACT.email}`}
          className="my-4 text-lg text-neutral-400 underline hover:text-purple-400 transition-colors duration-300 ease-in-out"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
