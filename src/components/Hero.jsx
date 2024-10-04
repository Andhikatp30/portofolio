import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.png";
import cvFile from "../assets/CV_Andhika_Trisna_Putra.pdf"; // Import file CV
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Hero = () => {
  const roles = ["Informatics Engineering", "Web Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      // If typing is complete (adding or deleting)
      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Switch to next role
      }
    };

    const typingDelay = isDeleting ? 100 : 200;
    const typingTimeout = setTimeout(handleTyping, typingDelay);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <div className="border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-7xl">
              Andhika Trisna Putra
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-5xl tracking-tighter text-transparent">
              {displayedText}
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="my-2 mx-wxl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>

            {/* Tambahkan tombol download CV */}
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 2 }}
              href={cvFile}
              download
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download CV
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              src={profilePic}
              alt="Andhika Trisna Putra"
              className="max-w-xs lg:max-w-md lg:ml-16 lg:-mt-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
