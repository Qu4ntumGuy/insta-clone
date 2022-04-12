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
    <div className="mx-5">
      <div className="flex justify-between max-w-6xl lg:mx-auto">
        <div className="relative hidden md:inline-grid w-24 cursor-pointer">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="md:hidden flex items-center">
          <CameraIcon className="h-8 w-8" />
        </div>

        <div className=" max-w-xs">
          <div className=" relative m-1 p-3 rounded-md">
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
          <HomeIcon className=" h-8 w-8" />
          <div className=" relative">
            <ChatIcon className=" h-8 w-8" />
            <div className=" absolute -top-1 -right-2 text-xs h-5 w-5 bg-red-500">3</div>
          </div>
          <PlusCircleIcon className=" h-8 w-8" />
          <UserGroupIcon className="h-8 w-8" />
          <HeartIcon className=" h-8 w-8 " />
          <img
            className=" relative h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
