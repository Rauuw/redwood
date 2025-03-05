import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'

const NavBarLayout = ({ children }) => {
  // Estado para controlar si el sidebar está abierto o cerrado
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="relative min-h-screen bg-gray-100 md:flex">
        {/* Sidebar */}
        <aside
          id="sidebar"
          className={`absolute inset-y-0 left-0 w-64 transform space-y-6 bg-blue-800 px-2 py-7 text-blue-100 transition duration-200 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0`}
        >
          {/* Header del sidebar con logo y botón de toggle */}
          <div className="flex items-center justify-between px-4">
            <a  className="flex items-center space-x-2 text-white">
              <img
                src="https://truck-i.com/img/truck-i-l.png"
                className="h-8 w-8"
                alt="LogiTruck System"
              />
              <span className="text-2xl font-extrabold">LogiTruck System</span>
            </a>
            {/* Botón para cerrar el sidebar (visible solo en móviles) */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav>
            <Link to={routes.home()}
              className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Home
            </Link>
            <details className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
              <summary>Empresa</summary>
              <ul className="pl-4">
                <li
                  className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  <Link to={routes.newCompany()}>Agregar empresa</Link>
                </li>
                <li
                  className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  <Link to={routes.companies()}>Ver empresas</Link>
                </li>
              </ul>
            </details>
            <details className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
              <summary>Camion</summary>
              <ul className="pl-4">
                <li
                  className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  <Link to={routes.newTruck()}>Agregar camion</Link>
                </li>
                <li
                  className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  <Link to={routes.trucks()}>Ver camiones</Link>
                </li>
              </ul>
            </details>
            <details className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
              <summary>Conductor</summary>
              <ul className="pl-4">
                <li
                  className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  <Link to={routes.newDriver()}>Agregar conductor</Link>
                </li>
                <li
                  className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  <Link to={routes.drivers()}>Ver conductores</Link>
                </li>
              </ul>
            </details>
            <details className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white">
              <summary>Orden</summary>
              <ul className="pl-4">
                <li
                  className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  <Link to={routes.newOrder()}>Agregar orden</Link>
                </li>
                <li
                  className="block rounded px-4 py-2.5 transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  <Link to={routes.orders()}>Ver ordenes</Link>
                </li>
              </ul>
            </details>

          </nav>
        </aside>

        <div className="flex-1 p-10">
          {/* Botón para abrir el sidebar (visible solo en móviles cuando está cerrado) */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded focus:outline-none"
            >
              <svg
                className="h-6 w-6 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          <div className="rounded-lg bg-white p-6 shadow">
            <main className="container mx-auto p-4">{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBarLayout
