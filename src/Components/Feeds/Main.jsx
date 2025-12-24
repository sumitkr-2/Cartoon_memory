import PostHeader from "../Feeds/PostHeader.jsx";
import PostImage from "../Feeds/PostImage.jsx";
import PostFooter from "../Feeds/PostFooter.jsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Data from "../../database/Story.js";

const Main = ({ index, setIndex }) => {
  const post = Data[index];

  return (
    <div
      className="
        flex flex-col items-center
        h-140 w-90
        rounded-xl
        bg-white/20 backdrop-blur-md
        shadow-xl shadow-black/30
        border border-white/30
        m-4
        
      "
    >
      <PostHeader image={post.image} name={post.name} />

      <div className="flex gap-4 items-center justify-center py-3 ">

        <FaChevronLeft
          onClick={() =>
            setIndex((index - 1 + Data.length) % Data.length)
          }
          className="w-8 h-8 cursor-pointer text-white drop-shadow-md"
        />

        <PostImage image={post.image} video={post.video} />

        <FaChevronRight
          onClick={() =>
            setIndex((index + 1) % Data.length)
          }
          className="w-8 h-8 cursor-pointer text-white drop-shadow-md"
        />

      </div>

      <PostFooter/>
    </div>
  );
};

export default Main;
