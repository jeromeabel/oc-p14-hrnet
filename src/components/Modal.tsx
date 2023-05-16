import React, { useState, useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
    console.log('inside modal, is it opened ? ', isOpen);
  }, [isOpen]);

  const handleClose = (): void => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <div
      className={`${
        isModalOpen
          ? 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
          : 'hidden  pointer-events-none'
      }`}
    >
      <div className="bg-white w-[500px] mx-auto p-8 rounded shadow-xl flex flex-col gap-6">
        {children}
        <button
          className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
