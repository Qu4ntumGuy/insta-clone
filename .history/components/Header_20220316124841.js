import Image from "next/image";
import {
  SearchIcon,
  PlusCicleIcon,
  UserGroupIcon,
  HeartIcon,
  CameraIcon,
  ChatIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/outline";

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
          <CameraIcon className=" absolute h-8 w-8" />
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
        <div className="flex items-center">
        <HomeIcon className=" h-8 w-8" />
        <ChatIcon className=" h-8 w-8" />          
        </div>
      </div>
    </div>
  );
};

export default Header;
