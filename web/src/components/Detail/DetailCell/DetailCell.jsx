import Detail from 'src/components/Detail/Detail'

export const QUERY = gql`
  query FindDetailById($id: Int!) {
    detail: detail(id: $id) {
      id
      id_order
      id_company
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Detail not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ detail }) => {
  return <Detail detail={detail} />
}
