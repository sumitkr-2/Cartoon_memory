import { useState, useRef, useEffect } from "react";
import Main from "../Feeds/Main";
import NavBar from "../Navbar/Navbar";
import Data from "../../database/Story";

const Body = () => {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // 🔁 Change video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [index]);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🎥 BACKGROUND VIDEO (dynamic) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        autoPlay
        loop
        muted={muted}
        playsInline
      >
        <source src={Data[index].video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col">
        <NavBar index={index} setIndex={setIndex} />
        <div className="flex justify-center">
          <Main index={index} setIndex={setIndex} />
        </div>
      </div>

      {/* 🔊 SOUND TOGGLE */}
      <button
        onClick={toggleSound}
        className="absolute bottom-4 right-4 z-20 bg-black/70 text-white px-3 py-2 rounded"
      >
        {muted ? "🔇 Sound Off" : "🔊 Sound On"}
      </button>
    </div>
  );
};

export default Body;
