import { gql } from "apollo-server";

const typeDefs = gql`
  # The main query object.
  type Query {
    testString: String
    # The current user.
    me: User
    userById(id: Int): User
  }

  type Mutation {
    updateUser(id: Int): User
  }

  # A user.
  type User {
    # The first name.
    firstName: String
    # The last name.
    lastName: String
  }
`;

export default typeDefs;
