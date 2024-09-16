import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Graphql/Mutation";
const CreateUser = () => {
  const [userCreate, { error }] = useMutation(CREATE_USER);
  const [state, setState] = useState("");
  console.log(error);

  return (
    <div>
      <input type="text" onChange={(e) => setState(e.target.value)} />
      <button
        onClick={() => {
          userCreate({
            variables: {
              name: state,
              username: state,
              password: state,
            },
          });
        }}
      >
        Save
      </button>
    </div>
  );
};

export default CreateUser;
