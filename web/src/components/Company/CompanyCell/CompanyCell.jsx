import Company from 'src/components/Company/Company'

export const QUERY = gql`
  query FindCompanyById($id: Int!) {
    company: company(id: $id) {
      id
      name
      address
      phone
      email
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Company not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ company }) => {
  return <Company company={company} />
}
