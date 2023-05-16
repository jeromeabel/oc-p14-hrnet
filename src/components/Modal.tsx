import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <div
      className={`modal fixed inset-0 flex items-center justify-center ${
        isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal={isModalOpen}
      aria-labelledby="modal-title"
    >
      <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="modal-content bg-white p-4 rounded shadow">
        <h2 id="modal-title" className="text-lg font-bold mb-2">
          Modal Title
        </h2>
        {children}
        <button
          className="modal-close bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
