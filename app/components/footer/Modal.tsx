import CartClient from "@/app/cart/CartClient";
import React, { useState } from "react";
import PaymentModal from "./PaymentModal";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handlePaymentButtonClick = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentCloseModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md">
      <CartClient />

      <div className="w-[217.23px] h-[47.37px] bg-blue-500 rounded-[25px] shadow mx-auto">
        <button
          onClick={() => {
            handleClose();
            handlePaymentButtonClick();
          }}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md mx-auto block"
        >
          Pay Now
        </button>

        <PaymentModal isPaymentOpen={isPaymentModalOpen} handlePaymentClose={handlePaymentCloseModal} />
      </div>
    </div>
  );
};

export default Modal;
