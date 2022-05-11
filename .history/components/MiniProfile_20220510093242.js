const MiniProfile = () => {
  return (
    <div className=" flex items-center justify-between mt-5 ml-5">
      <img
        className=" w-14 h-14 object-contain rounded-full border1 border-gray-600 "
        src="https://github.com/Qu4ntumGuy/myfirstsite/blob/main/images/Gaurav.png?raw=true"
        alt=""
      />
      <div className=" flex-1 mx-4">
        <h2 className=" font-bold text-xs">_.gauravbisht._</h2>
        <h3 className=" text-sm text-gray-400">GAURAV</h3>
      </div>
      <button className="text-sm font-bold  text-blue-400">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
