const Story = ({ img, username }) => {
  return (
    <div>
      <img className=" rounded-full" src={img} alt="" />
      <p>{username}</p>
    </div>
  );
};

export default Story;
