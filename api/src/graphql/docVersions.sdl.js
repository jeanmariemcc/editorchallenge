export const schema = gql`
  type DocVersion {
    id: Int!
    projFileId: Int!
    projFile: ProjFile!
    createdAt: DateTime!
  }

  type Query {
    docVersions: [DocVersion!]! @requireAuth
    docVersion(id: Int!): DocVersion @requireAuth
  }

  input CreateDocVersionInput {
    projFileId: Int!
  }

  input UpdateDocVersionInput {
    projFileId: Int
  }

  type Mutation {
    createDocVersion(input: CreateDocVersionInput!): DocVersion! @requireAuth
    updateDocVersion(id: Int!, input: UpdateDocVersionInput!): DocVersion!
      @requireAuth
    deleteDocVersion(id: Int!): DocVersion! @requireAuth
  }
`
