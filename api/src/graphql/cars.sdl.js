export const schema = gql`
  type Car {
    id: Int!
    marca: String!
    modelo: String!
    placa: String!
    ano: Int!
  }

  type Query {
    cars: [Car!]! @skipAuth
    car(id: Int!): Car @skipAuth
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
    createCar(input: CreateCarInput!): Car! @skipAuth
    updateCar(id: Int!, input: UpdateCarInput!): Car! @skipAuth
    deleteCar(id: Int!): Car! @skipAuth
  }
`
