export const schema = gql`
  type Company {
    id: Int!
    name: String!
    address: String!
    phone: String!
    email: String!
    createdAt: DateTime!
    trucks: [Truck]!
    drivers: [Driver]!
    details: [Detail]!
  }

  type Query {
    companies: [Company!]! @skipAuth
    company(id: Int!): Company @skipAuth
  }

  input CreateCompanyInput {
    name: String!
    address: String!
    phone: String!
    email: String!
  }

  input UpdateCompanyInput {
    name: String
    address: String
    phone: String
    email: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @skipAuth
    updateCompany(id: Int!, input: UpdateCompanyInput!): Company! @skipAuth
    deleteCompany(id: Int!): Company! @skipAuth
  }
`
