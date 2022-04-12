import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="flex">
        <div className="relative h-24 w-24">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
