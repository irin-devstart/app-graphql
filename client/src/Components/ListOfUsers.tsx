import React from "react";
import { GET_ALL_USER } from "../Graphql/Queries";

import { useQuery, useMutation } from "@apollo/client";
import { DELETE_USER } from "../Graphql/Mutation";

const ListOfUser = () => {
  const { data } = useQuery(GET_ALL_USER);
  const [deleteUser, { error }] = useMutation(DELETE_USER);

  console.log(error);

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => (
          <>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <h1>{user.password}</h1>

            <button onClick={() => deleteUser({ variables: { id: user.id } })}>
              Delete
            </button>
          </>
        ))}
    </div>
  );
};

export default ListOfUser;
