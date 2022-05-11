import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  CameraIcon,
  ChatIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="mx-5 shadow-sm border-b bg-white sticky top-0">
      <div className="flex justify-between max-w-screen-xl lg:mx-auto">
        <div className="relative w-24 cursor-pointer">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="">
          <div className="relative m-1 p-2 rounded-md hidden md:block ">
            <div className=" absolute inset-y-0  pl-3 flex items-center">
              <SearchIcon className=" h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-100 rounded-md block w-full pl-10 sm: text-sm 
            border-gray-300 focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <HomeIcon className=" navBtn" />
              <div className=" relative">
                <ChatIcon className=" navBtn" />
                <div
                  className=" absolute -top-1 -right-2 text-xs h-5 w-5
             bg-red-500 rounded-full flex items-center justify-center
             text-white"
                >
                  9+
                </div>
              </div>
              <PlusCircleIcon className=" navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className=" navBtn " />
              <img
              onClick={signOut}
                className=" relative h-6 w-6  rounded-full hover:scale-110 hover:cursor-pointer"
                src={session.user.image}
                alt="Profile"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
