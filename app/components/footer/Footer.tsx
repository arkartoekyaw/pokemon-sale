"use client";

import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNotificationCount = () => {
    setNotificationCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="mx-auto overflow-x-hidden sticky bottom-0">
      <div className="w-full max-w-[1512px] h-[120px] justify-center items-center flex flex-col mx-auto">
        <button
          type="button"
          className="w-full max-w-[108px] h-[41px] justify-center items-center inline-flex mt-2"
          onClick={handleButtonClick}
        >
          <div className="w-[108px] h-[41px] relative">
            <div className="w-[102px] h-[35px] left-[6px] top-[6px] absolute bg-blue-500 rounded-[10px] shadow" />
            <div className="w-[81px] h-[21px] left-[13px] top-[12px] absolute">
              <Image src="/cart.png" alt="cart" width={20} height={20} />
              <div className="left-[30px] top-[4px] absolute text-white text-xs font-medium font-['Roboto']">
                View cart
              </div>
            </div>
            <div className="w-4 h-4 left-0 top-0 absolute">
              <div className="w-4 h-4 left-0 top-0 absolute bg-red-400 rounded-[100px]" />
              <div className="left-[5px] top-[1px] absolute text-white text-xs font-medium font-['Roboto']">
                {notificationCount}
              </div>
            </div>
          </div>
        </button>

        <Modal isOpen={isModalOpen} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default Footer;
