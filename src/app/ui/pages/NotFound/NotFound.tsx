import React from 'react';
import './styles/NotFound.css';
export interface NotFoundInterface {}

const NotFound : React.FC<NotFoundInterface> = () => {
	return <div className='notfound'>NotFound</div >;
};

export default NotFound;
