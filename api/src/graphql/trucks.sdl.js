export const schema = gql`
  type Truck {
    id: Int!
    marca: String!
    modelo: String!
    placa: String!
    ano: Int!
    id_company: Int!
    company: Company!
  }

  type Query {
    trucks: [Truck!]! @requireAuth
    truck(id: Int!): Truck @requireAuth
  }

  input CreateTruckInput {
    marca: String!
    modelo: String!
    placa: String!
    ano: Int!
    id_company: Int!
  }

  input UpdateTruckInput {
    marca: String
    modelo: String
    placa: String
    ano: Int
    id_company: Int
  }

  type Mutation {
    createTruck(input: CreateTruckInput!): Truck! @requireAuth
    updateTruck(id: Int!, input: UpdateTruckInput!): Truck! @requireAuth
    deleteTruck(id: Int!): Truck! @requireAuth
  }
`
