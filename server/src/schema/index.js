const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    movie(id: ID!): Movie!
    series(id: ID!): Series!
    movies: [Movie!]!
    season(id: ID!): Season!
  }
  type Movie {
    id: ID!
    title: String!
    tagline: String!
    overview: String!
    poster_path: String!
    backdrop_path: String!
    vote_average: Float!
    adult: Boolean!
    status: String!
    budget: Int!
    revenue: Int!
    release_date: String!
    videos: [Videos]
    genres: [Genre!]!
    actors: [Actors!]!
    reviews: [Reviews!]!
    keywords: [Keywords!]!
    recommendations: [Recommendations!]!
    providers: [Providers]
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
  type Genre {
    id: ID!
    name: String
  }
  type Videos {
    key: String!
    site: String!
  }
  type Keywords {
    id: ID!
    name: String!
  }
  type Recommendations {
    id: ID!
    title: String!
    vote_average: Float!
    poster_path: String!
    backdrop_path: String!
  }
  type Providers {
    id: ID!
    name: String!
    logo_path: String!
  }
  type Series {
    id: ID!
    name: String!
    overview: String!
    tagline: String!
    vote_average: Float!
    status: String!
    poster_path: String!
    backdrop_path: String!
    firstAirDate: String!
    numberOfEpisodes: Int!
    numberOfSeasons: Int!
    lastEpisodeToAir: LastEpisode!
    genres: [Genre!]!
    actors: [Actors!]!
    reviews: [Reviews!]!
    keywords: [Keywords!]!
    recommendations: [Recommendations!]!
    providers: [Providers]
  }
  type LastEpisode {
    id: ID!
    airDate: String!
    episodeNumber: Int
    seasonNumber: Int
    name: String!
    Overview: String!
    stillPath: String!
    seasons: [Season!]!
  }
  type Season {
    id: ID!
    episodes: [Episode!]!
  }
  type Episode {
    airDate: String!
    episodeNumber: Int
  }
`;

module.exports = typeDefs;
