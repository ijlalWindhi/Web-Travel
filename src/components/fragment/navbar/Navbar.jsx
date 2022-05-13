import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {

    const sidebarContent = [
      {
        label: 'Home',
        target: '/',
      },
      {
        label: 'Transportation',
        target: '/transportation',
      },
      {
        label: 'Cart',
        target: '/cart',
      },
    ];

    return (
        <> 
          < nav class = "bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-100" > <div class="container flex flex-wrap justify-between items-center mx-auto">
            <div class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap text-primary-purple">
                    Skuy<span className='text-black'>Travel</span>.
                </span>
            </div>

            {/*   TOGGLE  */}
            <button
                data-collapse-toggle="mobile-menu"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
                <svg
                    class="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            {/*  END TOGGLE  */}

            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul
                    className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    {/* NAV-LINK */}
                    {
                        sidebarContent.map(({target, label}) => (
                            <li className="px-3 py-3">
                                <NavLink 
                                    to={target}
                                    className="block py-2 px-4 text-lg rounded md:bg-transparent font-medium md:p-0 dark:text-white bg-green-200"
                                    aria-current="page">
                                    {label}
                                </NavLink>
                            </li>
                        ))
                    }

                    <NavLink to="/login" className="btn-round">
                        <button
                            type="button"
                            className="btn-warning bg-primary-purple text-lg text-white px-5 py-2 rounded-2xl">
                            Login
                        </button>
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
</>
    )
}

export default Navbar