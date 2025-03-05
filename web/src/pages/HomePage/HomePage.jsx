import { Metadata } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'
const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            ¡Bienvenido a LogiTruck System! 🚛
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Gestiona la entrada y salida de camiones de forma rápida y segura.
          </p>

          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all">
              Registrar Entrada/Salida
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4 rounded-lg text-center">
              📋 <span className="font-semibold">Órdenes</span>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg text-center">
              🏭 <span className="font-semibold">Empresas</span>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg text-center">
              🚚 <span className="font-semibold">Camiones</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
