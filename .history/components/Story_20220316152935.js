const Story = ({ img, username }) => {
  return (
    <div>
      <img
        className=" h-16 w-16 rounded-full p-[1.5px] 
        border-red-500 border-2 cursor-pointer object-contain"
        src={img}
        alt=""
      />
      <p className=" text-xs truncate">{username}</p>
    </div>
  );
};

export default Story;
