export const schema = gql`
  type Detail {
    id: Int!
    id_order: Int!
    id_company: Int!
    order: Order!
    company: Company!
  }

  type Query {
    details: [Detail!]! @requireAuth
    detail(id: Int!): Detail @requireAuth
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
    createDetail(input: CreateDetailInput!): Detail! @requireAuth
    updateDetail(id: Int!, input: UpdateDetailInput!): Detail! @requireAuth
    deleteDetail(id: Int!): Detail! @requireAuth
  }
`
