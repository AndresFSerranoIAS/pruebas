import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Employee } from '../../pages/employee';
import { Home } from '../../pages/home';
import { NotFound } from '../../pages/NotFound';
import { Settlement } from '../../pages/settlement';
import { SaveEmployee } from '../entitycomponents/employee/SaveEmployee';
import './styles/MainComponent.css';
export interface MainComponentInterface { }

const MainComponent: React.FC<MainComponentInterface> = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path='/employee'>
				<Employee />
			</Route>
			<Route path="/settlement">
				<Settlement />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>);
};

export default MainComponent;
