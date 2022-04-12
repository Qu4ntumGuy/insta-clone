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

const Header = () => {
  return (
    <div className="mx-5 shadow-sm border-b bg-white sticky top-0">
      <div className="flex justify-between max-w-4xl lg:mx-auto">
        <div className="relative hidden md:inline w-24 cursor-pointer">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="md:hidden flex items-center">
          <CameraIcon className="h-6 w-6" />
        </div>

        <div>
          <div className="relative m-1 p-2 rounded-md md:in">
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
          <HomeIcon className=" navBtn" />
          <div className=" relative">
            <ChatIcon className=" navBtn" />
            <div className=" absolute -top-1 -right-2 text-xs h-5 w-5
             bg-red-500 rounded-full flex items-center justify-center
             text-white">
              9+
            </div>
          </div>
          <PlusCircleIcon className=" navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className=" navBtn " />
          <img
            className=" relative h-9 rounded-full"
            src="https://github.com/Qu4ntumGuy/myfirstsite/blob/main/images/gaurav.jpg?raw=true"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
