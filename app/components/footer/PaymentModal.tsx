import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import React from "react";

interface PaymentModalProps {
  isPaymentOpen: boolean;
  handlePaymentClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isPaymentOpen,
  handlePaymentClose,
}) => {
  

  const { handleClearCart } = useCart();
  if (!isPaymentOpen) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
      <div className="w-[416px] h-[613px] pt-[251px] flex-col justify-end items-center inline-flex">
        <div className="w-[416px] h-[362px] relative">
          <div className="w-[416px] h-[362px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
          <div className="w-[184px] h-[165px] left-[116px] top-[99px] absolute">
            <Image
              className="rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  relative"
              src="/tick.svg"
              alt="close"
              width={100}
              height={100}
            />
            <div className="left-0 top-[135px] absolute text-center text-stone-900 text-2xl font-medium font-['Poppins']">
              Payment success!
            </div>
          </div>
        </div>
      </div>

      <div className="w-[35px] h-[35px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  relative">
        <button
          onClick={() => {
            handlePaymentClose();
            handleClearCart();
          }}
          className="w-[35px] h-[35px]  relative"
        >
          <Image
            className="bg-red-600 rounded-md shadow"
            src="/close.svg"
            alt="close"
            width={300}
            height={300}
          />
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
