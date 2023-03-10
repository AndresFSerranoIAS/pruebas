import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles/SaveEmployee.css';

export interface SaveEmployeeInterface {
	onGoBack: () => void;}

const SaveEmployee: React.FC<SaveEmployeeInterface> = ({ onGoBack }) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
    onGoBack(); // Llamamos la función para mostrar la lista
  };

  return (
    <div className='saveemployee'>
      <h1>Save Employee</h1>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default SaveEmployee;