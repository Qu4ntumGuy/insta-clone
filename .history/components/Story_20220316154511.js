const Story = ({ img, username }) => {
  return (
    <div>
      <img
        className=" h-14 w-14 rounded-full p-[1.5px] 
        border-red-500 border-2 cursor-pointer hover:scale-110 duration-200 
        ease-out object-contain"
        src={img}
        alt=""
      />
      <p className=" text-xs truncate w-16">{username}</p>
    </div>
  );
};

export default Story;
