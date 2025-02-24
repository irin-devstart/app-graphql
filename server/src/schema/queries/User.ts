import { GraphQLList } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../typeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};
