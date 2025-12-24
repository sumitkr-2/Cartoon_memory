import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/sumit.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">

      
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-24 min-h-screen">


        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            I Build <span className="text-pink-500">Beautiful</span>
            <br />
            Interactive Web Experiences
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            A modern social-media style interface built using React,
            Tailwind CSS, animations, and clean state management.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() =>
                window.open("https://github.com/sumitkr-2", "_blank")
              }
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg font-semibold transition"
            >
              View Project
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sumit-kumar2004/",
                  "_blank"
                )
              }
              className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition"
            >
              Contact
            </button>
          </div>
        </div>

     
        <div className="mt-12 md:mt-0 relative">
          <div className="absolute inset-0 blur-3xl bg-pink-500/30 rounded-full"></div>

          <img
  src={heroImage}
  alt="Hero"
  className="
    relative
    w-[260px] h-[260px]
    md:w-[320px] md:h-[320px]
    rounded-full
    object-cover
    object-[50%_15%]
    shadow-2xl
    border-4 border-white/20
  "
/>

        </div>
      </section>

    
      <section className="flex flex-col items-center justify-center py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore the Project
        </h2>

        <p className="text-gray-400 text-center max-w-md mb-8">
          Dive into the full interactive feed experience built with React,
          Tailwind CSS, and smooth UI logic.
        </p>

        <button
          onClick={() => navigate("/feed")}
          className="
            px-10 py-4
            bg-gradient-to-r from-pink-500 to-red-500
            rounded-full
            text-lg font-semibold
            hover:scale-105
            transition-transform
          "
        >
          Explore Now →
        </button>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Sumit Kumar. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;
