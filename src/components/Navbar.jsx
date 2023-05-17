import React from 'react';
import { Link } from 'react-router-dom';
import { CREATE_ROUTE, HOME_ROUTE} from '../utils/consts';

const NavBar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Redux</span>
            </a>
            <div class="flex items-center">
                <Link to={HOME_ROUTE} className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">Home</Link>
                <Link to={CREATE_ROUTE} className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">Create Post</Link>

            </div>
        </div>
    </nav>
    );
};

export default NavBar;