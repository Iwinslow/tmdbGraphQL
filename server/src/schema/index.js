const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    movie(id: ID!): Movie!
    movies: [Movie!]!
  }
  type Movie {
    id: ID!
    title: String!
    overview: String!
    poster_path: String
    vote_average: Float
    actors: [Actors]
    reviews: [Reviews!]!
  }
  type Actors {
    id: ID!
    name: String!
    profile_path: String
    character: String!
  }
  type Reviews {
    author: String!
    content: String!
  }
`;

module.exports = typeDefs;
