import { ApolloServer, ValidationError, ApolloError, gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    age: Int!
    tweets: [Tweet]
  }
  type Tweet {
    id: ID!
    userid: String!
    user: User!
    text: String!
    likes: Int
  }
  type Query {
    users: [User]
    tweets: [Tweet]
  }
`;

const users = [
  {
    id: 1,
    name: "Kate Chopin",
    username: "McKatey",
    email: "kate.choplin@medium.com",
    age: 31,
    tweets: [],
  },
  {
    id: 2,
    name: "Paul Auster",
    username: "paul.the.boy",
    email: "paul.auster@yahoo.com",
    age: 22,
    tweets: [],
  },
];

const tweets = [
  {
    id: 1,
    userid: 1,
    user: "Kate Chopin",
    text: "me bloggers",
    likes: 0,
  },
  {
    id: 10,
    userid: 2,
    user: "Paul Auster",
    text: "I work",
    likes: 100069,
  },
];

const resolvers = {
  Query: {
    users: () => users,
    tweets: () => tweets,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server.
console.clear();
server.listen().then(({ url }: { url: string }): void => {
  console.log(`🚀 Server ready at ${url}`);
});
