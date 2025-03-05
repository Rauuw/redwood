import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import DetailForm from 'src/components/Detail/DetailForm'

const CREATE_DETAIL_MUTATION = gql`
  mutation CreateDetailMutation($input: CreateDetailInput!) {
    createDetail(input: $input) {
      id
    }
  }
`

const NewDetail = () => {
  const [createDetail, { loading, error }] = useMutation(
    CREATE_DETAIL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Detail created')
        navigate(routes.details())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createDetail({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Detail</h2>
      </header>
      <div className="rw-segment-main">
        <DetailForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDetail
