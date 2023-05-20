type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen = false, onClose, children }: ModalProps) => {
  return (
    <div
      className={`${
        isOpen
          ? 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
          : 'hidden pointer-events-none'
      }`}
    >
      <div className="bg-white w-[500px] mx-auto p-8 rounded shadow-xl flex flex-col gap-6">
        {children}
        <button
          className="p-3 rounded bg-secondary hover:bg-primary text-white text-xl cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
