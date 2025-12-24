import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">

      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">
            Sumit Kumar
          </h3>
          <p className="text-white/70 text-sm mt-1">
            Building beautiful & interactive web experiences
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="flex gap-6 text-sm">
          {/* HOME — SAME TAB */}
          <a
            href="/"
            className="text-white/80 hover:text-white transition"
          >
            Home
          </a>

          {/* PROJECTS — NEW TAB */}
          <a
            href="https://github.com/sumitkr-2"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            Projects
          </a>

          {/* ABOUT — NEW TAB */}
          <a
            href="https://sumitkr-2.github.io/Portfolio_website/"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            About
          </a>

          {/* CONTACT — NEW TAB */}
          <a
            href="https://www.linkedin.com/in/sumit-kumar2004/"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* RIGHT SOCIALS (ALREADY CORRECT) */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/sumitkr-2"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sumit-kumar2004/"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="text-center text-xs text-white/60 py-4">
        © {new Date().getFullYear()} Sumit Kumar. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
