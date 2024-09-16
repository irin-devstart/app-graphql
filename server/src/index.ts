import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";
const main = async () => {
  await createConnection({
    type: "mysql",
    database: "graphql",
    username: "root",
    password: "",
    logging: true,
    //jika sudah di false
    synchronize: false,
    entities: [Users],
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/qraphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
