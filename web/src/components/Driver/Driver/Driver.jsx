import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_DRIVER_MUTATION = gql`
  mutation DeleteDriverMutation($id: Int!) {
    deleteDriver(id: $id) {
      id
    }
  }
`

const Driver = ({ driver }) => {
  const [deleteDriver] = useMutation(DELETE_DRIVER_MUTATION, {
    onCompleted: () => {
      toast.success('Driver deleted')
      navigate(routes.drivers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete driver ' + id + '?')) {
      deleteDriver({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Driver {driver.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{driver.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{driver.name}</td>
            </tr>
            <tr>
              <th>Cpf</th>
              <td>{driver.cpf}</td>
            </tr>
            <tr>
              <th>Birth date</th>
              <td>{timeTag(driver.birthDate)}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{driver.phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{driver.email}</td>
            </tr>
            <tr>
              <th>Id company</th>
              <td>{driver.id_company}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDriver({ id: driver.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(driver.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Driver
