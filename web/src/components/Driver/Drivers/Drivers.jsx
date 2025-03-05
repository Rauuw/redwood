import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Driver/DriversCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_DRIVER_MUTATION = gql`
  mutation DeleteDriverMutation($id: Int!) {
    deleteDriver(id: $id) {
      id
    }
  }
`

const DriversList = ({ drivers }) => {
  const [deleteDriver] = useMutation(DELETE_DRIVER_MUTATION, {
    onCompleted: () => {
      toast.success('Driver deleted')
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
    if (confirm('Are you sure you want to delete driver ' + id + '?')) {
      deleteDriver({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Cpf</th>
            <th>Birth date</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Id company</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{truncate(driver.id)}</td>
              <td>{truncate(driver.name)}</td>
              <td>{truncate(driver.cpf)}</td>
              <td>{timeTag(driver.birthDate)}</td>
              <td>{truncate(driver.phone)}</td>
              <td>{truncate(driver.email)}</td>
              <td>{truncate(driver.id_company)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.driver({ id: driver.id })}
                    title={'Show driver ' + driver.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDriver({ id: driver.id })}
                    title={'Edit driver ' + driver.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete driver ' + driver.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(driver.id)}
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

export default DriversList
