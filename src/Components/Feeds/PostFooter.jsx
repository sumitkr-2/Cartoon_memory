import { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaShare,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showBigHeart, setShowBigHeart] = useState(false);

  // ❤️ LIKE (toggle + big heart only when liking)
  const handleLike = () => {
    if (!liked) {
      setShowBigHeart(true);
      setTimeout(() => setShowBigHeart(false), 600);
    }
    setLiked(!liked);
  };

  // 💬 COMMENT (real hook point)
  const handleComment = () => {
    alert("Open comment modal / page here");
  };

  // 🔗 SHARE (real browser share)
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Check this post",
        text: "Hey, look at this!",
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  // 🔖 SAVE (toggle)
  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="relative w-full px-4 ">

      {/* ❤️ BIG HEART (only on LIKE) */}
      {showBigHeart && (
        <FaHeart
          className="
            absolute inset-0 m-auto
            text-red-500
            text-8xl
            animate-ping
            pointer-events-none
          "
        />
      )}

      {/* ICON ROW */}
      <div className="flex justify-between items-center text-2xl">

        {/* LIKE */}
        <button onClick={handleLike}>
          {liked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
        </button>

        {/* COMMENT */}
        <button onClick={handleComment}>
          <FaRegComment />
        </button>

        {/* SHARE */}
        <button onClick={handleShare}>
          <FaShare />
        </button>

        {/* SAVE */}
        <button onClick={handleSave}>
          {saved ? <FaBookmark /> : <FaRegBookmark />}
        </button>

      </div>
    </div>
  );
};

export default PostFooter;
