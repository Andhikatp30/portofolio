import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Jika ingin menggunakan logo, cukup uncomment bagian ini */}
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <a href="#" className="text-4xl font-semibold text-white tracking-wide">
          Portofolio<span className="text-blue-500">.</span>
        </a>
      </div>
      <div className="flex items-center justify-center gap-6 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/andhika-trisna-putra/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Andhikatp30"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/andhika30_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors duration-300 ease-in-out"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
