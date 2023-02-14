import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../../../domain/assets/logo.png'
const Navbar = () => {
  const [active, setActive] = useState(0);
  const paths = ['/', '/employee', '/settlement'];

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between">
        <img src={logo} className="navBarLogo h-12 flex items-center pl-60" alt="IAS Nomina Logo" />
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col pr-10 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {paths.map((path, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className={`block py-2 pl-5 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    active === index ? 'active' : ''
                  }`}
                  onClick={() => setActive(index)}
                >
                  {path === '/' ? 'Home' : path === '/employee' ? 'Empleados' : 'Liquidación'}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;