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
    trucks: [Truck!]! @skipAuth
    truck(id: Int!): Truck @skipAuth
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
    createTruck(input: CreateTruckInput!): Truck! @skipAuth
    updateTruck(id: Int!, input: UpdateTruckInput!): Truck! @skipAuth
    deleteTruck(id: Int!): Truck! @skipAuth
  }
`
