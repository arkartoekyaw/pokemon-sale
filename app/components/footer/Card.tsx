"use client";
import Image from "next/image";
import React, { useState } from "react";

const Card = ({ id, imageSrc, handleNotificationCount }) => {
  const [color, setColor] = useState("bg-amber-400");

  function handleClick() {
    console.log(id + " button clicked");

    setColor("bg-stone-900");
    setTimeout(() => {
      setColor("bg-amber-400");
      handleNotificationCount(); // Call the callback function to update the count
    }, 200);
  }

  return (
    <div className={`p-10 card-${id}`}>
      <div className="w-[294px] h-[431.37px] relative transition hover:scale-105">
        <div className="w-[294px] h-[204px] left-0 top-[204px] absolute bg-white rounded-[20px] shadow" />
        <div className="w-[194.37px] h-[267.87px] left-[49px] top-0 absolute">
          <Image
            src={imageSrc}
            alt={`Card ${id}`}
            width={50}
            height={60}
            className="w-[194.37px] h-[271.13px] left-0 top-0 absolute"
          />
        </div>

        <div
          className={`w-[217.23px] h-[47.37px] left-[38px] top-[384px] absolute ${color} rounded-[25px]`}
        >
          <div className="w-[217.23px] h-[47.37px] left-0 top-0 absolute  rounded-[25px] shadow" />
          <button
            type="button"
            onClick={handleClick}
            className={`left-[65px] top-[9px] absolute text-center text-white text-xl font-medium font-['Poppins'] ${color} rounded-[25px]`}
          >
            Selected
          </button>
        </div>

        <div className="left-[86px] top-[278px] absolute text-stone-900 text-[25px] font-bold font-['Poppins']">
          Pokemon
        </div>
        <div className="left-[81px] top-[341.63px] absolute text-stone-500 text-xl font-normal font-['Poppins']">
          $2.49
        </div>
        <div className="left-[164.30px] top-[341.63px] absolute text-stone-500 text-xl font-normal font-['Poppins']">
          3 left
        </div>
        <div className="left-[126px] top-[311.43px] absolute text-sky-700 text-base font-normal font-['Poppins']">
          rarity
        </div>
      </div>
    </div>
  );
};

export default Card;
