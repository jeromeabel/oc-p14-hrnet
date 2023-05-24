import { useContext, useState } from 'react';

import { EmployeeType } from '../types';
import AddForm from '../components/AddForm';
import Modal from '../components/Modal';
import { EmployeesContext } from '../context/employeeContext';

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { updateEmployeesData } = useContext(EmployeesContext);

  const handleFormSubmit = (data: EmployeeType) => {
    updateEmployeesData(data);
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
        <h2>✅ Well done!</h2>
        <p>Your form has been submitted successfully.</p>
      </Modal>
    </>
  );
};

export default Add;
