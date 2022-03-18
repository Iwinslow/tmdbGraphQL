import React from "react";
import QueryResult from "./QueryResult";
import Card from "../commons/Card";
import { useQuery } from "@apollo/client";
import MOVIE from "../gql";

function App() {
  const { loading, error, data } = useQuery(MOVIE);
  console.log("hola");
  return (
    <>
      <QueryResult error={error} loading={loading} data={data}>
        <Card movie={data} />
      </QueryResult>
    </>
  );
}

export default App;
