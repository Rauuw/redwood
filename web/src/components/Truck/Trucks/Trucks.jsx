import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Truck/TrucksCell'
import { truncate } from 'src/lib/formatters'

const DELETE_TRUCK_MUTATION = gql`
  mutation DeleteTruckMutation($id: Int!) {
    deleteTruck(id: $id) {
      id
    }
  }
`

const TrucksList = ({ trucks }) => {
  const [deleteTruck] = useMutation(DELETE_TRUCK_MUTATION, {
    onCompleted: () => {
      toast.success('Truck deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete truck ' + id + '?')) {
      deleteTruck({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Ano</th>
            <th>Id company</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck) => (
            <tr key={truck.id}>
              <td>{truncate(truck.id)}</td>
              <td>{truncate(truck.marca)}</td>
              <td>{truncate(truck.modelo)}</td>
              <td>{truncate(truck.placa)}</td>
              <td>{truncate(truck.ano)}</td>
              <td>{truncate(truck.id_company)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.truck({ id: truck.id })}
                    title={'Show truck ' + truck.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTruck({ id: truck.id })}
                    title={'Edit truck ' + truck.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete truck ' + truck.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(truck.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TrucksList
