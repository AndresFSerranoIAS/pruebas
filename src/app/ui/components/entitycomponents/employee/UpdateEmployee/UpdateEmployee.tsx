import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles/UpdateEmployee.css';

export interface UpdateEmployeeInterface {
	onGoBack: () => void;
}

const UpdateEmployee : React.FC<UpdateEmployeeInterface> = ({ onGoBack }) => {
  const history = useHistory();
  
  const handleBack = () => {
    history.goBack();
    onGoBack(); // Llamamos la función para mostrar la lista
  };

  return (
    <div className='updateemployee'>
      <h1>UpdateEmployee</h1>
      <button onClick={handleBack}>Volver</button>
    </div>
  );
};

export default UpdateEmployee;