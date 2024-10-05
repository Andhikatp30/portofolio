const Footer = () => {
  return (
    <footer className="border-b border-neutral-900 py-6 text-white">
      <div className="mx-auto flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-4 lg:mb-0">
          <p className="text-center text-sm lg:text-start">
            © {new Date().getFullYear()} Andhika Trisna Putra. All Rights Reserved.
          </p>
        </div>
        {/* Sosial media icons dapat diaktifkan kembali jika diperlukan */}
        {/* <div className="flex items-center gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/andhika-trisna-putra/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Andhikatp30"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out">
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/andhika30_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out">
            <FaInstagram />
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
