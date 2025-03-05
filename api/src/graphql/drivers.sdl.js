export const schema = gql`
  type Driver {
    id: Int!
    name: String!
    cpf: String!
    birthDate: DateTime!
    phone: String!
    email: String!
    id_company: Int!
    company: Company!
  }

  type Query {
    drivers: [Driver!]! @skipAuth
    driver(id: Int!): Driver @skipAuth
  }

  input CreateDriverInput {
    name: String!
    cpf: String!
    birthDate: DateTime!
    phone: String!
    email: String!
    id_company: Int!
  }

  input UpdateDriverInput {
    name: String
    cpf: String
    birthDate: DateTime
    phone: String
    email: String
    id_company: Int
  }

  type Mutation {
    createDriver(input: CreateDriverInput!): Driver! @skipAuth
    updateDriver(id: Int!, input: UpdateDriverInput!): Driver! @skipAuth
    deleteDriver(id: Int!): Driver! @skipAuth
  }
`
