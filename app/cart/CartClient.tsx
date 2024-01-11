'use client'

import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { useState } from "react";

const CartClient = () => {
  const { cartProducts } = useCart();
  const [forceRender, setForceRender] = useState(0);


  const handleClearAll =() =>{
    
    localStorage.removeItem('eShopCartItems');
    setTimeout(() => {
        setForceRender(forceRender + 1);
      }, 100);
;
  }

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div>
        <div>Your cart is empty</div>
      </div>
    );
  }
  return (
    <div>
      <div className="w-[416px] h-[613px] flex-col  items-center inline-flex pt-6">
        <div className="w-[416px]  h-[450px] overflow-y-auto no-scrollbar flex-col  items-center inline-flex">
          {cartProducts &&
            cartProducts.map((item) => {
              return (
                <div className="py-2" key={item.id}>
                  <div className="w-[336px] h-[104.74px] justify-center items-center gap-5 inline-flex">
                    <Image
                      src={item.images}
                      width={40}
                      height={50}
                      alt=''
                      className="w-[77px] h-[106px] rounded-[5px]"
                    />
                    <div className="w-[243px] h-[90px] relative">
                      <div className="left-0 top-0 absolute text-stone-900 text-xl font-bold font-['Poppins']">
                        {item.name}
                      </div>
                      <div className="left-0 top-[28px] absolute">
                        <span className="text-stone-900 text-xs font-normal font-['Poppins'] pe-1">
                          {formatPrice(item.price)}
                        </span>
                        <span className="text-stone-500 text-xs font-normal font-['Poppins']">
                        per card
                        </span>
                      </div>
                      <div className="w-[25px] h-[30px] left-[218px] top-[8px] absolute">
                        <div className="origin-top-left rotate-180 w-2 h-[13px] left-[25px] top-0 absolute">-</div>
                        <div className="left-0 top-0 absolute text-right text-blue-500 text-xl font-semibold font-['Poppins']">
                          2
                        </div>
                      </div>
                      <div className="w-[47px] h-[42px] left-[196px] top-[48px] absolute">
                        <div className="left-[16px] top-0 absolute text-right text-stone-900 text-xs font-medium font-['Poppins']">
                          price
                        </div>
                        <div className="left-0 top-[18px] absolute text-right text-blue-500 text-base font-bold font-['Poppins']">
                          $4.68
                        </div>
                      </div>
                      <div className="left-0 top-[69px] absolute">
                        <span className="text-red-600 text-sm font-semibold font-['Poppins'] pe-1">
                          {item.inStock}
                        </span>
                        <span className="text-stone-300 text-sm font-normal font-['Poppins']">
                          cards left
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="w-[209px] h-[59px] left-[104px] top-[550px] absolute">
          <div className="w-[209px] h-6 left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-stone-900 text-base font-semibold font-['Poppins']">
              Total cards
            </div>
            <div className="left-[200px] top-0 absolute text-right text-red-600 text-base font-semibold font-['Poppins']">
              7
            </div>
          </div>
          <div className="w-[209px] h-[30px] left-0 top-[29px] absolute">
            <div className="left-0 top-0 absolute text-stone-900 text-xl font-bold font-['Poppins']">
              Total price
            </div>
            <div className="left-[147px] top-0 absolute text-right text-red-600 text-xl font-bold font-['Poppins']">
              $19.97
            </div>
          </div>
        </div>
        <div className="left-[183px] top-[510px] absolute text-center text-stone-500 text-xs font-normal font-['Poppins'] underline">
          <button
            className="mx-auto block"
            onClick={handleClearAll}
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
