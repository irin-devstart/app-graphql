import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import CreateUser from "./Components/CreateUser";
import ListOfUsers from "./Components/ListOfUsers";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/qraphql",

    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ListOfUsers />
        <CreateUser />
      </div>
    </ApolloProvider>
  );
}

export default App;
