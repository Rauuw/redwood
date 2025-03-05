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
    drivers: [Driver!]! @requireAuth
    driver(id: Int!): Driver @requireAuth
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
    createDriver(input: CreateDriverInput!): Driver! @requireAuth
    updateDriver(id: Int!, input: UpdateDriverInput!): Driver! @requireAuth
    deleteDriver(id: Int!): Driver! @requireAuth
  }
`
