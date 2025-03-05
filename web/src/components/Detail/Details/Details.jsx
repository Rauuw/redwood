import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Detail/DetailsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_DETAIL_MUTATION = gql`
  mutation DeleteDetailMutation($id: Int!) {
    deleteDetail(id: $id) {
      id
    }
  }
`

const DetailsList = ({ details }) => {
  const [deleteDetail] = useMutation(DELETE_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('Detail deleted')
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
    if (confirm('Are you sure you want to delete detail ' + id + '?')) {
      deleteDetail({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Id order</th>
            <th>Id company</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.id}>
              <td>{truncate(detail.id)}</td>
              <td>{truncate(detail.id_order)}</td>
              <td>{truncate(detail.id_company)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.detail({ id: detail.id })}
                    title={'Show detail ' + detail.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDetail({ id: detail.id })}
                    title={'Edit detail ' + detail.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete detail ' + detail.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(detail.id)}
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

export default DetailsList
