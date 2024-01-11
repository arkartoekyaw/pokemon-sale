import { useCart } from "@/hooks/useCart";

const CartClient = () => {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div>
        <div>Your cart is empty</div>
      </div>
    );
  }
  return (
    <div>
      <div className="w-[416px] h-[613px] flex-col justify-center items-center inline-flex">
        <div>
          {cartProducts &&
            cartProducts.map((item) => {
              return <div key={item.id}>{item.name}</div>;
            })}
        </div>

        <div>
          <button
            className="text-black underline mx-auto block"
            onClick={() => console.log("clicked")}
          >
            Clear all
          </button>
        </div>

        <div className="w-[209px] h-[59px] left-[104px] top-[441px] absolute">
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
        <div className="left-[183px] top-[397px] absolute text-center text-stone-500 text-xs font-normal font-['Poppins'] underline">
          Clear all
        </div>
      </div>
    </div>
  );
};

export default CartClient;
