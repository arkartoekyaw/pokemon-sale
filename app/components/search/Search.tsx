import Image from "next/image";
import Container from "../Container";

const Search = () => {
  return (
    <Container>
      <div className="w-[383px] h-[35px] relative flex flex-col  justify-center items-center">
      <div className="w-[380px] h-[35px] left-0 top-0 absolute bg-white rounded-[100px] shadow" />
      <div className="left-[24px] top-[7px] absolute text-stone-300 text-sm font-normal font-['Poppins']">
        Name..
      </div>
      
      <div className="w-60 h-[35px] left-[177px] top-0 absolute">
        <div className="w-14 h-[35px] left-0 top-0 absolute">
          <div className="left-[13px] top-[9px] absolute text-stone-300 text-[11px] font-normal font-['Poppins']">
            Type
          </div>
          <div className="w-[11px] h-[11px] left-[45px] top-[12px] absolute">
            <div className="absolute  right-0 top-0">
              <Image src="/arrow.png" alt="arrow" width={10} height={10} />
            </div>
          </div>
        </div>
        <div className="w-[61px] h-[35px] left-[70px] top-0 absolute">
          <div className="left-[13px] top-[9px] absolute text-stone-300 text-[11px] font-normal font-['Poppins']">
            Rarity
          </div>
          <div className="w-[11px] h-[11px] left-[50px] top-[12px] absolute">
            <div className="absolute right-0 top-0">
              <Image src="/arrow.png" alt="arrow" width={10} height={10} />
            </div>
          </div>
        </div>
        <div className="w-[47px] h-[35px] left-[145px] top-0 absolute">
          <div className="left-[13px] top-[9px] absolute text-stone-300 text-[11px] font-normal font-['Poppins']">
            Set
          </div>
          <div className="w-[11px] h-[11px] left-[36px] top-[12px] absolute">
            <div className="absolute right-0 top-0">
              <Image src="/arrow.png" alt="arrow" width={10} height={10} />
            </div>
          </div>
        </div>
      </div>
    </div>


    </Container>
    
  );
};

export default Search;
