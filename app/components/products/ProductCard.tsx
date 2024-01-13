"use client";

import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProductCardProps {
  data: any;
}

export type CartProductType = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  images: string;
  inStock: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [color, setColor] = useState("bg-amber-400");

  function handleClick() {
    console.log(data.id + " button clicked");

    setColor("bg-stone-900");
    setTimeout(() => {
      setColor("bg-amber-400");
    }, 200);
  }

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: data.id,
    name: data.name,
    quantity: 1,
    price: data.price,
    images: data.images,
    inStock: data.inStock,
  });

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === data.id
      );
      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, data.id]);

  // console.log(cartProducts);

  return (
    <div className={`p-6 mx-auto`}>
      <div className="mx-auto w-[294px] h-[431.37px] relative transition hover:scale-105">
        <div className="w-[294px] h-[204px] left-0 top-[204px] absolute bg-white rounded-[20px] shadow" />
        <div className="w-[194.37px] h-[267.87px] left-[49px] top-0 absolute">
          <Image
            src={data.images}
            alt={data.id}
            width={50}
            height={60}
            className="w-[194.37px] h-[271.13px] left-0 top-0 absolute"
          />
        </div>

        <button
          type="button"
          onClick={() => {
            handleClick();
            handleAddProductToCart(cartProduct);
          }}
          className={`w-[217.23px] h-[47.37px] left-[38px] top-[384px] absolute ${color} rounded-[25px]`}
        >
          <div
            className={`left-[65px] top-[9px] absolute text-center text-white text-xl font-medium font-['Poppins'] ${color} rounded-[25px]`}
          >
            Selected
          </div>
        </button>

        <div className="left-[86px] top-[278px] absolute text-stone-900 text-[25px] font-bold font-['Poppins']">
          {data.name}
        </div>
        <div className="left-[81px] top-[341.63px] absolute text-stone-500 text-xl font-normal font-['Poppins']">
          {formatPrice(data.price)}
        </div>
        <div className="left-[164.30px] top-[341.63px] absolute text-stone-500 text-xl font-normal font-['Poppins']">
          {data.inStock} left
        </div>
        <div className="left-[126px] top-[311.43px] absolute text-sky-700 text-base font-normal font-['Poppins']">
          rarity
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
