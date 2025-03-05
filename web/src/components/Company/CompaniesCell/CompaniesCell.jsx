import { Link, routes } from '@redwoodjs/router'

import Companies from 'src/components/Company/Companies'

export const QUERY = gql`
  query FindCompanies {
    companies {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      No companies yet.{' '}
      <Link to={routes.newCompany()} className="rw-link">
        Create one?
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ companies }) => {
  return <Companies companies={companies} />
}
