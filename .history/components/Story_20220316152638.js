const Story = ({ img, username }) => {
  return (
    <div>
      <img className=" h-16 w-16 rounded-full p-2" src={img} alt="" />
      <p>{username}</p>
    </div>
  );
};

export default Story;
