export const schema = gql`
  type Detail {
    id: Int!
    id_order: Int!
    id_company: Int!
    order: Order!
    company: Company!
  }

  type Query {
    details: [Detail!]! @skipAuth
    detail(id: Int!): Detail @skipAuth
  }

  input CreateDetailInput {
    id_order: Int!
    id_company: Int!
  }

  input UpdateDetailInput {
    id_order: Int
    id_company: Int
  }

  type Mutation {
    createDetail(input: CreateDetailInput!): Detail! @skipAuth
    updateDetail(id: Int!, input: UpdateDetailInput!): Detail! @skipAuth
    deleteDetail(id: Int!): Detail! @skipAuth
  }
`
