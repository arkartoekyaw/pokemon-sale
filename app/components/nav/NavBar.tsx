import Image from "next/image";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full h-[70px] bg-white z-30 flex flex-col justify-center items-center mt-4">
      <div className="text-stone-900 sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold font-Poppins">
        TCG Marketplace
      </div>

      <div className="w-[68px] h-[42px] relative p-2">
        <div className="w-[52px] h-[51px] bg-white rounded-full">
          <div className="w-[26.57px] h-[28.26px] left-[20.87px] top-[20.64px] absolute">
            <Image src="/group1.svg" alt="Group 1" width={50} height={60} />
          </div>
        </div>

        <div className="origin-top-left rotate-[-6.33deg] w-[130px] h-[40px] left-[0.30px] top-[19.69px] absolute">
          <Image src="/text.svg" alt="text" width={50} height={60} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
