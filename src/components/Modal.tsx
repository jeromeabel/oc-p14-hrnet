/**
 * Modal component for displaying a modal dialog.
 *
 * @module Modal
 */

/**
 * Props for the Modal component.
 */
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

/**
 * Modal component for displaying a modal dialog.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - State of the Modal
 * @param {Function} props.onClose - Send click event to parent component
 * @param {React.ReactNode} props.children - React children
 * @returns {JSX.Element} The rendered Modal component.
 */

const Modal = ({ isOpen = false, onClose, children }: ModalProps) => {
  return (
    <div
      className={`${
        isOpen
          ? 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 animate-opacity'
          : 'hidden pointer-events-none'
      }`}
    >
      <div className="bg-white relative w-3/4 max-w-[500px] mx-auto p-10 rounded shadow-xl flex flex-col gap-6 animate-y">
        {children}
        <button
          className="bg-secondary absolute -right-6 -top-6 text-white  hover:bg-primary py-2 px-4 rounded-full text-4xl"
          onClick={onClose}
          aria-label="Close the modal"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default Modal;
