import { useEffect, useRef } from "react";
import Story from "../Stories/Story.jsx";
import Data from "../../database/Story.js";

const NavBar = ({ index, setIndex }) => {
  const containerRef = useRef(null);

  // Auto-scroll active story into view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const active = container.children[index];
    if (active) {
      active.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [index]);

  return (
    <div
      ref={containerRef}
      className="
        flex gap-5 px-4 py-2 mt-4
        overflow-x-auto no-scrollbar
        scroll-smooth
        bg-transparent
      "
    >
      {Data.map((story, i) => {
        const isActive = i === index;

        return (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="
              flex flex-col items-center cursor-pointer
              transition-transform duration-200
              hover:-translate-y-0.5 hover:scale-105
              active:scale-95
            "
          >
            {/* Avatar Ring */}
            <div
              className={`
                relative p-[2px] rounded-full
                transition-all duration-300
                ${isActive
                  ? "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400"
                  : "bg-gray-300/50 hover:bg-gradient-to-tr hover:from-pink-400 hover:to-yellow-300"}
              `}
            >
              <div className="bg-white rounded-full p-[2px]">
                <Story image={story.image} />
              </div>

              {/* Active glow */}
              {isActive && (
                <span className="absolute inset-0 rounded-full blur-sm bg-pink-500/30 -z-10"></span>
              )}
            </div>

            {/* Name (VISIBLE on video) */}
            <span
              className={`
                mt-1 text-[11px] font-semibold
                drop-shadow-sm
                transition-colors duration-200
                ${isActive ? "text-white" : "text-white/80"}
              `}
            >
              {story.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
