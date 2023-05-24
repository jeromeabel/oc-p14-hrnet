import { useContext, useState } from 'react';

// Types and Context
import { EmployeesContext } from '../context/EmployeesContext';
import { EmployeeType } from '../types';

// Components
import AddEmployeeForm from '../components/AddEmployeeForm/AddEmployeeForm';
import Modal from '../components/Modal';

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newEmployee, setNewEmployee] = useState<EmployeeType>();
  const { addEmployee } = useContext(EmployeesContext);

  const handleFormSubmit = (employee: EmployeeType) => {
    addEmployee(employee);
    setNewEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>Add a new employee</h1>
      <div className="w-[500px] mx-auto">
        <AddEmployeeForm onSubmit={handleFormSubmit} />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>✅ Data submitted</h2>
        {newEmployee && (
          <p>
            The new employee{' '}
            <b>
              {newEmployee.firstName} {newEmployee.lastName}
            </b>{' '}
            is added.
          </p>
        )}
      </Modal>
    </>
  );
};

export default Add;
