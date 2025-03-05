import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TruckForm from 'src/components/Truck/TruckForm'

export const QUERY = gql`
  query EditTruckById($id: Int!) {
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

const UPDATE_TRUCK_MUTATION = gql`
  mutation UpdateTruckMutation($id: Int!, $input: UpdateTruckInput!) {
    updateTruck(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ truck }) => {
  const [updateTruck, { loading, error }] = useMutation(UPDATE_TRUCK_MUTATION, {
    onCompleted: () => {
      toast.success('Truck updated')
      navigate(routes.trucks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTruck({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Truck {truck?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TruckForm
          truck={truck}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
