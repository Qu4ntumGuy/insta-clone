import Image from "next/image";
import {
  SearchIcon,
  PlusCicleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="relative h-24 w-24 hidden lg:inline-grid">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative h-10 w-10 lg:hidden">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Emblem-700x394.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className=" relative p-3 m-1 rounded-md">
          <div className=" absolute inset-y-0 flex items-center pl-3 ">
            <SearchIcon className=" h-5 w-5 text-gray-500" />
          </div>
          <input
            className=" w-full pl-10 bg-gray-100 sm: text-sm border-gray-200"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
