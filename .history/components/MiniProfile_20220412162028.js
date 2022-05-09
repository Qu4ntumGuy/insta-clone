const MiniProfile = () => {
  return (
    <div className=" flex items-center justify-between mt-5 ml-5">
      <img
        className=" w-14 h-14 object-contain rounded-full border1 border-gray-600 "
        src="https://m.media-amazon.com/images/I/71ouO-MEmIL._SL1500_.jpg"
        alt=""
      />
      <div className=" flex-1 mx-4">
        <h2 className=" font-bold text-xs">_gauravbisht_</h2>
        <h3 className=" text-xs text-gray-500">Welcome to the Instagram(Name))..</h3>
      </div>
      <button className="text-sm font-bold text-blue-500">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
