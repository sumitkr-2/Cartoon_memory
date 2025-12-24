import { useRef, useEffect } from "react";

const PostImage = ({ image, video }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [video]);

  return (
    <div className="h-[470px] w-[320px] rounded-2xl overflow-hidden bg-black">
      {video ? (
        <video
          ref={videoRef}
          key={video}                // 🔥 VERY IMPORTANT
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};

export default PostImage;
