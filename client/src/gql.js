import { gql } from "@apollo/client";

const MOVIE = gql`
  query {
    movie(id: 550) {
      id
      title
      overview
      poster_path
      vote_average
      actors {
        name
        profile_path
        character
      }
      reviews {
        author
        content
      }
    }
  }
`;

export default MOVIE;
