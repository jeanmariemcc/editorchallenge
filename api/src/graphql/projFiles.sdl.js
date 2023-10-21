export const schema = gql`
  type ProjFile {
    id: Int!
    filename: String!
    language: String!
    content: String!
    projectId: Int!
    project: Project!
    docVersion: [DocVersion]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    projFiles: [ProjFile!]! @requireAuth
    projFile(id: Int!): ProjFile @requireAuth
  }

  input CreateProjFileInput {
    filename: String!
    language: String!
    content: String!
    projectId: Int!
  }

  input UpdateProjFileInput {
    filename: String
    language: String
    content: String
    projectId: Int
  }

  type Mutation {
    createProjFile(input: CreateProjFileInput!): ProjFile! @requireAuth
    updateProjFile(id: Int!, input: UpdateProjFileInput!): ProjFile!
      @requireAuth
    deleteProjFile(id: Int!): ProjFile! @requireAuth
  }
`
