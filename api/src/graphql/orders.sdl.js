export const schema = gql`
  type Order {
    id: Int!
    origin: String!
    destination: String!
    date: DateTime!
    status: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    detail: [Detail]!
  }

  type Query {
    orders: [Order!]! @requireAuth
    order(id: Int!): Order @requireAuth
  }

  input CreateOrderInput {
    origin: String!
    destination: String!
    date: DateTime!
    status: String!
  }

  input UpdateOrderInput {
    origin: String
    destination: String
    date: DateTime
    status: String
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @skipAuth
    updateOrder(id: Int!, input: UpdateOrderInput!): Order! @skipAuth
    deleteOrder(id: Int!): Order! @skipAuth
  }
`
