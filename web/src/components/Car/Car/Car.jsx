import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_CAR_MUTATION = gql`
  mutation DeleteCarMutation($id: Int!) {
    deleteCar(id: $id) {
      id
    }
  }
`

const Car = ({ car }) => {
  const [deleteCar] = useMutation(DELETE_CAR_MUTATION, {
    onCompleted: () => {
      toast.success('Car deleted')
      navigate(routes.cars())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete car ' + id + '?')) {
      deleteCar({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Coche {car.id} Detalles
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{car.id}</td>
            </tr>
            <tr>
              <th>Marca</th>
              <td>{car.marca}</td>
            </tr>
            <tr>
              <th>Modelo</th>
              <td>{car.modelo}</td>
            </tr>
            <tr>
              <th>Placa</th>
              <td>{car.placa}</td>
            </tr>
            <tr>
              <th>Ano</th>
              <td>{car.ano}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCar({ id: car.id })}
          className="rw-button rw-button-blue"
        >
          Editar
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(car.id)}
        >
          Eliminar
        </button>
      </nav>
    </>
  )
}

export default Car
