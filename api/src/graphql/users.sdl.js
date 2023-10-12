export const schema = gql`
  type User {
    id: Int!
    username: String!
    password: String!
    email: String!
    projects: [Project]!
    colabDocs: [codeDoc]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    username: String!
    password: String!
    email: String!
  }

  input UpdateUserInput {
    username: String
    password: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
