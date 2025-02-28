import CarsCell from 'src/components/Car/CarsCell'
import { Link, routes } from '@redwoodjs/router'

const CarsPage = () => {
  return (
    <>
      <h1 className='text-3xl'>Lista de coches</h1>
      <br/>
      <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to={routes.newCar()}>Agregar coche</Link>
      <br/>
      <br/>
      <CarsCell />
    </>
  )
}

export default CarsPage
