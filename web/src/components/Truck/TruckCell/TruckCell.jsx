import Truck from 'src/components/Truck/Truck'

export const QUERY = gql`
  query FindTruckById($id: Int!) {
    truck: truck(id: $id) {
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

export const Empty = () => <div>Truck not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ truck }) => {
  return <Truck truck={truck} />
}
