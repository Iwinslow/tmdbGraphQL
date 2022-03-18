const resolvers = {
  Query: {
    movie: (parent, args, { dataSources }, info) => {
      return dataSources.tmdbAPI.getSingleMovie(args.id);
    },
    movies: async (parent, args, { dataSources }, info) => {
      const data = await dataSources.tmdbAPI.getDiscoverMovies();
      return data.results;
    },
  },
  Movie: {
    actors: async ({ id }, args, { dataSources }, info) => {
      const data = await dataSources.tmdbAPI.getActors(id);
      return data.cast;
    },
    reviews: async (parent, args, { dataSources }, info) => {
      const data = await dataSources.tmdbAPI.getReviews(parent.id);
      return data.results;
    },
  },
};

module.exports = resolvers;
