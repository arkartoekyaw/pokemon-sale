import React from 'react';

const Modal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
      {/* Add your modal content here */}
      <p>Popup content goes here</p>
    
      <button onClick={handleClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md mx-auto block">
        Pay Now
      </button>
    </div>
  );
};

export default Modal;