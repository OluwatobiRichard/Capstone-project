import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full m-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-lg text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;