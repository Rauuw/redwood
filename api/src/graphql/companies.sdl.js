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
    companies: [Company!]! @requireAuth
    company(id: Int!): Company @requireAuth
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
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: Int!, input: UpdateCompanyInput!): Company! @requireAuth
    deleteCompany(id: Int!): Company! @requireAuth
  }
`
