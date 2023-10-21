export const schema = gql`
  type Project {
    id: Int!
    title: String!
    ownerID: Int!
    owner: User!
    projFiles: [ProjFile]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    title: String!
    ownerID: Int!
  }

  input UpdateProjectInput {
    title: String
    ownerID: Int
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
