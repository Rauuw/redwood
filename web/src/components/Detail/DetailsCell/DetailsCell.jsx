import { Link, routes } from '@redwoodjs/router'

import Details from 'src/components/Detail/Details'

export const QUERY = gql`
  query FindDetails {
    details {
      id
      id_order
      id_company
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      No details yet.{' '}
      <Link to={routes.newDetail()} className="rw-link">
        Create one?
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ details }) => {
  return <Details details={details} />
}
