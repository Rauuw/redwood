export const schema = gql`
  type User {
    id: Int!
    email: String!
    password: String!
    id_role: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    role: Role!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    email: String!
    password: String! 
    id_role: Int!
  }

  input UpdateUserInput {
    email: String
    password: String
    id_role: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
