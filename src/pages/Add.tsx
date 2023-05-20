import { useState } from 'react';

import { AddFormType } from '../types/types';
import AddForm from '../components/AddForm';
import Modal from '../components/Modal';

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleFormSubmit = (data: AddFormType) => {
    console.log(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>Add a new employee</h1>
      <div className="w-[500px] mx-auto">
        <AddForm onSubmit={handleFormSubmit} />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>✅ Success!</h2>
        <p>Your form has been submitted successfully.</p>
      </Modal>
    </>
  );
};

export default Add;
