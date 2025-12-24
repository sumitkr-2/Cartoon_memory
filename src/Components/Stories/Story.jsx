
const Story = (props) => {
  return (
    <div className="flex flex-col items-center">
      
      <div className="h-24 w-24 rounded-full overflow-hidden border cursor-pointer hover:scale-110 transition duration-200 ease-out">
        <img
          className="h-full w-full object-cover"
          src={props.image}
          alt="story"
        />
      </div>

      <h2 className="text-sm mt-1 text-black">{props.name}</h2>
    </div>
  );
};

export default Story;
