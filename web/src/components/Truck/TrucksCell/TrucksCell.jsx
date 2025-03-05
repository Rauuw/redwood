import { Link, routes } from '@redwoodjs/router'

import Trucks from 'src/components/Truck/Trucks'

export const QUERY = gql`
  query FindTrucks {
    trucks {
      id
      marca
      modelo
      placa
      ano
      id_company
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      No trucks yet.{' '}
      <Link to={routes.newTruck()} className="rw-link">
        Create one?
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ trucks }) => {
  return <Trucks trucks={trucks} />
}
