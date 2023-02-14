import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles/ListEmployees.css';

export interface ListEmployeesInterface {
  onGoBack: () => void;
}

const ListEmployees: React.FC<ListEmployeesInterface> = ({ onGoBack }) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
    onGoBack(); // Llamamos la función para mostrar la lista
  };

  return (
    <div className='listemployees'>
      <h1>List of Employees</h1>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ListEmployees;