const Story = ({ img, username }) => {
  return (
    <div>
      <img className=" rounded-full h-16 w-16" src={img} alt="" />
      <p>{username}</p>
    </div>
  );
};

export default Story;
