import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_ROLE_MUTATION = gql`
  mutation DeleteRoleMutation($id: Int!) {
    deleteRole(id: $id) {
      id
    }
  }
`

const Role = ({ role }) => {
  const [deleteRole] = useMutation(DELETE_ROLE_MUTATION, {
    onCompleted: () => {
      toast.success('Role deleted')
      navigate(routes.roles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete role ' + id + '?')) {
      deleteRole({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Role {role.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{role.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{role.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRole({ id: role.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(role.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Role
