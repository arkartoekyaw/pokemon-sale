// Modal.js

import React from "react";

interface PaymentModalProps {
    isPaymentOpen: boolean;
    handlePaymentClose: () => void;
  }

const PaymentModal : React.FC<PaymentModalProps> = ({ isPaymentOpen, handlePaymentClose }) => {
  if (!isPaymentOpen) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
      {/* Add your modal content here */}
      <p>Payment Successful</p>

      <button
        onClick={handlePaymentClose}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md mx-auto block"
      >
        hi
      </button>
    </div>
  );
};

export default PaymentModal;
