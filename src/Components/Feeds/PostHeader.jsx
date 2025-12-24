const PostHeader = ({ name, image }) => {
  return (
    <div className="w-full flex items-center justify-center px-3 py-1  relative">
      
      {/* Avatar */}
      <img
        src={image}
        alt={name}
        className="absolute left-3 w-9 h-9 rounded-full object-cover"
      />

      {/* BIG + BOLD NAME */}
      <h2 className="text-lg font-extrabold tracking-wide text-gray-900 text-center">
        {name}
      </h2>
    </div>
  );
};

export default PostHeader;
