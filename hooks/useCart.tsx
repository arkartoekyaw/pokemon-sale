"use client";

import { CartProductType } from "@/app/components/products/ProductCard";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  useEffect(() => {
    const cartItems: any = localStorage.getItem("eShopCartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);

    setCartProducts(cProducts);
  }, []);

  // const handleAddProductToCart = useCallback((product: CartProductType) => {
  //   setCartProducts((prev) => {
  //     let updatedCart;

  //     if (prev) {
  //       updatedCart = [...prev, product];
  //     } else {
  //       updatedCart = [product];
  //     }

  //     localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
  //     return updatedCart;
  //   });
  // }, []);



 // Inside useCart hook

const handleAddProductToCart = useCallback((product: CartProductType) => {
  setCartProducts((prev) => {
    if (!prev) {
      // If the cart is empty, add the product
      const updatedCart = [product];
      localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    }

    // Check if the product is already in the cart
    const existingIndex = prev.findIndex((item) => item.id === product.id);

    if (existingIndex > -1) {
      // If the product is in the cart, update the quantity by 1
      prev[existingIndex].quantity += 0.5;
    } else {
      // If the product is not in the cart, add it
      prev.push(product);
    }

    localStorage.setItem("eShopCartItems", JSON.stringify(prev));
    return [...prev];
  });
}, []);




  

  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;
      if (product.quantity === 99) {
        return;
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;
      if (product.quantity === 1) {
        return;
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);

    localStorage.setItem("eShopCartItems", JSON.stringify(null));
  }, [cartProducts]);

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
