import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DetailForm from 'src/components/Detail/DetailForm'

export const QUERY = gql`
  query EditDetailById($id: Int!) {
    detail: detail(id: $id) {
      id
      id_order
      id_company
    }
  }
`

const UPDATE_DETAIL_MUTATION = gql`
  mutation UpdateDetailMutation($id: Int!, $input: UpdateDetailInput!) {
    updateDetail(id: $id, input: $input) {
      id
      id_order
      id_company
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ detail }) => {
  const [updateDetail, { loading, error }] = useMutation(
    UPDATE_DETAIL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Detail updated')
        navigate(routes.details())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateDetail({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Detail {detail?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DetailForm
          detail={detail}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
