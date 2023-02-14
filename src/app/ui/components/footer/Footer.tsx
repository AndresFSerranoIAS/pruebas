import React from 'react';
import './styles/Footer.css';

function Footer() {
	return (<React.Fragment>

<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.ias.com.co/" className="hover:underline">IAS-Software</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Acerca de</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Politicas de privacidad</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licencias</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contactanos</a>
        </li>
    </ul>
</footer>

	</React.Fragment>)
}

export default Footer;
