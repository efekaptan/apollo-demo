const { gql } = require('apollo-server-express');

const schema = gql`
  type User {
    email: String!
    id: ID!
    name: String
    posts: [Post!]!
  }
  type Post {
    content: String
    id: ID!
    published: Boolean!
    title: String!
    author: User
  }
  type Query {
    feed: [Post!]!
    post(id: ID!): Post
  }
  type Mutation {
    createUser(data: UserCreateInput!): User!
    createDraft(authorEmail: String, content: String, title: String!): Post!
    publish(id: ID!): Post
  }
  input UserCreateInput {
    email: String!
    name: String
    posts: [PostCreateWithoutAuthorInput!]
  }
  input PostCreateWithoutAuthorInput {
    content: String
    published: Boolean
    title: String!
  }
`;

export default schema;