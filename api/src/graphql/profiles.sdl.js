export const schema = gql`
  type Profile {
    id: Int!
    firstName: String!
    lastName: String!
    userId: Int!
    user: User!
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: Int!): Profile @requireAuth
  }

  input CreateProfileInput {
    firstName: String!
    lastName: String!
    userId: Int!
  }

  input UpdateProfileInput {
    firstName: String
    lastName: String
    userId: Int
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: Int!, input: UpdateProfileInput!): Profile! @requireAuth
    deleteProfile(id: Int!): Profile! @requireAuth
  }
`
