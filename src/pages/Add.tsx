/**
 * Add page component.
 *
 * Renders the Add page content with a form to add a new employee and a modal for feedback.
 *
 * @module Add
 */

// Lib
import { useState } from 'react';

// Types and Context
import { useEmployeesContext } from '../context/EmployeesContext';
import { EmployeeType } from '../types';

// Components
import AddEmployeeForm from '../components/AddEmployeeForm/AddEmployeeForm';
import Modal from '../components/Modal';

/**
 * The Add page component.
 *
 * @returns {JSX.Element} The rendered Add page content.
 */
const Add = () => {
  // States for Modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEmployeeNew, setIsEmployeeNew] = useState<boolean>(false);
  const [newEmployee, setNewEmployee] = useState<EmployeeType>();

  const { addEmployee, employees } = useEmployeesContext();

  /**
   * Handles form submission.
   *
   * @param {EmployeeType} employee - The employee data submitted through the form.
   */
  const handleFormSubmit = (employee: EmployeeType) => {
    const isInContext = employees.some((item) => {
      return JSON.stringify(item) === JSON.stringify(employee);
    });

    setIsEmployeeNew(!isInContext);

    if (!isInContext) {
      addEmployee(employee);
      setNewEmployee(employee);
    }

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
        {isEmployeeNew ? (
          <>
            <h2>✅ Data submitted</h2>
            <p>
              The new employee{' '}
              <b>
                {newEmployee?.firstName} {newEmployee?.lastName}
              </b>{' '}
              is added.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-red-500">⚠️ Data not submitted</h2>
            <p>The employee is already in the data base.</p>
          </>
        )}
      </Modal>
    </>
  );
};

export default Add;
