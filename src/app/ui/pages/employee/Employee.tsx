import React, { useState } from 'react';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { ListEmployees } from '../../components/entitycomponents/employee/ListEmployees';
import { SaveEmployee } from '../../components/entitycomponents/employee/SaveEmployee';
import { UpdateEmployee } from '../../components/entitycomponents/employee/UpdateEmployee';
import './styles/Employee.css';

interface Props { }

interface PathObject {
  [key: string]: string;
}

const Employee: React.FC<Props> = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showList, setShowList] = useState(true);
  const history = useHistory();

  const optionPaths = {
    get: 'get',
    new: 'new',
    update: 'update'
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowList(false);
  };

  const paths: PathObject = {
    get: 'get',
    new: 'new',
    update: 'update'
  };

  const handleListBack = () => {
    setShowList(true);
    let pathToPush;
    switch (selectedOption) {
      case 'new':
        pathToPush = 'new';
        break;
      case 'update':
        pathToPush = 'update';
        break;
      case 'get':
        pathToPush = 'get';
        break;
      default:
        pathToPush = selectedOption;
    }
    history.push(`${url}/${paths[pathToPush]}`);
  };

  const { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <br />
      <div className={showList ? '' : 'hidden'}>
        <div className="bg-gray-900  mx-auto flex justify-center items-center menuContainer">
          <div className="container-item">

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div className="p-24">

                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Obten una lista de empleados</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" >Puedes acceder a los empleados estando en la capacidad de filtrarlos por el salario base que devengan.</p>
                <button type="button" className="text-white bg-gradient-to-r from-gray-500 via-blue-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-40">
        <Link
          to={`${url}/${optionPaths.get}`}
          onClick={() => handleOptionClick('get')}
          className={selectedOption === 'get' ? 'selected' : ''}
        >
          Get Employees
        </Link>
      </button>
              </div>
            </div>

          </div>
          <div className="container-item">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div className="p-24">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-40">
        <Link
          to={`${url}/${optionPaths.new}`}
          onClick={() => handleOptionClick('new')}
          className={selectedOption === 'new' ? 'selected' : ''}
        >
          Save
        </Link>
      </button>
              </div>
            </div>
          </div>
          <div className="container-item">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div className="p-28">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-40 ">
        <Link to={`${url}/${optionPaths.update}`}
          onClick={() => handleOptionClick('update')}
          className={selectedOption === 'update' ? 'selected' : ''}
        >
          Update
        </Link>
      </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Switch>
        <Route path={`${path}/${optionPaths.new}`}>
          <SaveEmployee onGoBack={handleListBack} />
        </Route>
        <Route path={`${path}/${optionPaths.get}`}>
          <ListEmployees onGoBack={handleListBack} />
        </Route>
        <Route path={`${path}/${optionPaths.update}`}>
          <UpdateEmployee onGoBack={handleListBack} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Employee;