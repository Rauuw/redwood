import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_DETAIL_MUTATION = gql`
  mutation DeleteDetailMutation($id: Int!) {
    deleteDetail(id: $id) {
      id
    }
  }
`

const Detail = ({ detail }) => {
  const [deleteDetail] = useMutation(DELETE_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('Detail deleted')
      navigate(routes.details())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete detail ' + id + '?')) {
      deleteDetail({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Detail {detail.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{detail.id}</td>
            </tr>
            <tr>
              <th>Id order</th>
              <td>{detail.id_order}</td>
            </tr>
            <tr>
              <th>Id company</th>
              <td>{detail.id_company}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDetail({ id: detail.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(detail.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Detail
