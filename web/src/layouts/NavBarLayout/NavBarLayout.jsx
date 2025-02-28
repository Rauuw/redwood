import { useState } from 'react';
//import { Link, useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const NavBarLayout = ({ children }) => {
  // Estado para controlar si el sidebar está abierto o cerrado
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //const [isAuthenticated, currentUser, logOut] = useAuth()

  return (
    <>
      <div className="relative min-h-screen bg-gray-100 md:flex">
        {/* Sidebar */}
        <aside
          id="sidebar"
          className={`absolute inset-y-0 left-0 w-64 transform space-y-6 bg-blue-800 px-2 py-7 text-blue-100 transition duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:relative md:translate-x-0`}
        >
          <a href="#" className="flex items-center space-x-2 px-4 text-white">
            <img src="https://truck-i.com/img/truck-i-l.png" className="h-8 w-8" alt="LogiTruck System" />
            <span className="text-2xl font-extrabold">LogiTruck System</span>
          </a>
          <nav>
            <a href="#" className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
              Home
            </a>
            <details className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
              <summary>Coches</summary>
              <ul className="pl-4">
                <li className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
                  <Link to={routes.newCar()}>Agregar coche</Link>
                </li>
                <li className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
                  <Link to={routes.cars()}>Ver coches</Link>
                </li>
                {/* <li className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
                  <Link to={routes.home()}>Careers</Link>
                </li> */}
              </ul>
            </details>
            <a href="#" className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
              Features
            </a>
            <a href="#" className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
              Pricing
            </a>
            <a href="#" className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
              Contact
            </a>
          </nav>
        </aside>

        <div className="flex-1 p-10">
          {/* Botón para toggle (visible en móviles) */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            {sidebarOpen ? 'Cerrar Sidebar' : 'Abrir Sidebar'}
          </button>

          <div className="rounded-lg bg-white p-6 shadow">
            <p className="mt-2 text-gray-600">
              <main className="container mx-auto p-4">{children}</main>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarLayout;

