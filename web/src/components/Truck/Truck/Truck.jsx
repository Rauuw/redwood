import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_TRUCK_MUTATION = gql`
  mutation DeleteTruckMutation($id: Int!) {
    deleteTruck(id: $id) {
      id
    }
  }
`

const Truck = ({ truck }) => {
  const [deleteTruck] = useMutation(DELETE_TRUCK_MUTATION, {
    onCompleted: () => {
      toast.success('Truck deleted')
      navigate(routes.trucks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete truck ' + id + '?')) {
      deleteTruck({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Truck {truck.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{truck.id}</td>
            </tr>
            <tr>
              <th>Marca</th>
              <td>{truck.marca}</td>
            </tr>
            <tr>
              <th>Modelo</th>
              <td>{truck.modelo}</td>
            </tr>
            <tr>
              <th>Placa</th>
              <td>{truck.placa}</td>
            </tr>
            <tr>
              <th>Ano</th>
              <td>{truck.ano}</td>
            </tr>
            <tr>
              <th>Id company</th>
              <td>{truck.id_company}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTruck({ id: truck.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(truck.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Truck
