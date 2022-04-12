import Image from "next/image";
import {
  SearchIcon,
  PlusCicleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Emblem-700x394.png"
            layout="fill"
            objectFit="contain"
          />
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

        <HomeIcon className=" w-8" />
      </div>
    </div>
  );
};

export default Header;
