export const schema = gql`
  type Car {
    id: Int!
    marca: String!
    modelo: String!
    placa: String!
    ano: Int!
  }

  type Query {
    cars: [Car!]! @requireAuth
    car(id: Int!): Car @requireAuth
  }

  input CreateCarInput {
    marca: String!
    modelo: String!
    placa: String!
    ano: Int!
  }

  input UpdateCarInput {
    marca: String
    modelo: String
    placa: String
    ano: Int
  }

  type Mutation {
    createCar(input: CreateCarInput!): Car! @requireAuth
    updateCar(id: Int!, input: UpdateCarInput!): Car! @requireAuth
    deleteCar(id: Int!): Car! @requireAuth
  }
`
