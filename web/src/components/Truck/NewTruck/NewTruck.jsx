import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import TruckForm from 'src/components/Truck/TruckForm'

const CREATE_TRUCK_MUTATION = gql`
  mutation CreateTruckMutation($input: CreateTruckInput!) {
    createTruck(input: $input) {
      id
    }
  }
`

const NewTruck = () => {
  const [createTruck, { loading, error }] = useMutation(CREATE_TRUCK_MUTATION, {
    onCompleted: () => {
      toast.success('Truck created')
      navigate(routes.trucks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTruck({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Truck</h2>
      </header>
      <div className="rw-segment-main">
        <TruckForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTruck
