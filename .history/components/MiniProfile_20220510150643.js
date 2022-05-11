import { useSession } from "next-auth/react";

const MiniProfile = () => {

    const {data: session} = useSession();

  return (
    <div className=" flex items-center justify-between mt-5 ml-5">
      <img
        className=" w-14 h-14 object-contain rounded-full border1 border-gray-600 "
        src={session.user.image}
        alt=""
      />
      <div className=" flex-1 mx-4">
        <h2 className=" font-bold text-xs">{session?.user?.username}</h2>
        <h3 className=" text-sm text-gray-400">{session?.user?.name}</h3>
      </div>
      <button className="text-sm font-bold  text-blue-500">Switch</button>
    </div>
  );
};

export default MiniProfile;
