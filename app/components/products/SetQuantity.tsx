"use client";

import { CartProductType } from "./ProductCard";


interface SetQtyProps {
  cartCounter?: boolean;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded';

const SetQuantity: React.FC<SetQtyProps> = ({
  cartCounter,

  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex gap-8 item-center">
      {cartCounter ? null : <div className="font-semibold">Quantity</div>}
      <div className="flex gap-4 items-center text-base">
        <button onClick={handleQtyDecrease} className={btnStyles}>-</button>
        <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
      </div>
    </div>
  );
};

export default SetQuantity;
