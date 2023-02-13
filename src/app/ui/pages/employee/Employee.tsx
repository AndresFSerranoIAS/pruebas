import React from 'react';
import { Link, Route, Switch, useRouteMatch,
	useParams} from 'react-router-dom';
import { SaveEmployee } from '../../components/entitycomponents/employee/SaveEmployee';
import './styles/Employee.css';
export interface EmployeeInterface { }

const Employee: React.FC<EmployeeInterface> = () => {
	let match = useRouteMatch();
	return <React.Fragment>

		<ul>
			<li>
				<Link to="new">Save</Link>
			</li>
			<li>
				<Link to="get">Get Employees</Link>
			</li>
		</ul>
		<Switch>
			<Route path="new">
				<SaveEmployee/>
			</Route>
			<Route path="get">
				<SaveEmployee/>
			</Route>
		</Switch>
	</React.Fragment>;
};

export default Employee;
