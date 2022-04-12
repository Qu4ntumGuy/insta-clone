const MiniProfile = () => {
  return (
    <div className=" flex items-center justify-between mt-14 ml-10">
      <img
        className=" w-14 h-14 rounded-full border p-[2px] border-gray-600 "
        src="https://m.media-amazon.com/images/I/71ouO-MEmIL._SL1500_.jpg"
        alt=""
      />
      <div className=" mx-4">
        <h2 className=" font-bold ">_gauravbisht_</h2>
        <h3 className="text-sm text-gray-500">Welcome to the Instagram..</h3>
      </div>
      <button className=" text-blue-400 text-sm">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
