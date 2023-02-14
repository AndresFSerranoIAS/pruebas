import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { SaveEmployee } from '../../components/entitycomponents/employee/SaveEmployee';
import './styles/Employee.css';

const Employee: React.FC = () => {

	const { pathname } = useLocation();
	return (
		<React.Fragment>
			<ul>
				<li>
					<Link to="/employee/new">Save</Link>
				</li>
				<li>
					<Link to="/employee/get">Get Employees</Link>
					{pathname}
				</li>
			</ul>
			<Switch>
				<Route path="/employee/new">
					<SaveEmployee />
				</Route>
				<Route path="/employee/get">
					<h2>Hola</h2>
				</Route>
			</Switch>
		</React.Fragment>
	);
};

export default Employee;
