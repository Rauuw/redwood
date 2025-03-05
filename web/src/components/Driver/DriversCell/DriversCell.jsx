import { Link, routes } from '@redwoodjs/router'

import Drivers from 'src/components/Driver/Drivers'

export const QUERY = gql`
  query FindDrivers {
    drivers {
      id
      name
      cpf
      birthDate
      phone
      email
      id_company
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      No drivers yet.{' '}
      <Link to={routes.newDriver()} className="rw-link">
        Create one?
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ drivers }) => {
  return <Drivers drivers={drivers} />
}
