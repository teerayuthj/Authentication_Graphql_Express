const { GraphQLSchema } = require("graphql");

const RootQuery = require("./types/root_query_type");
const mutation = require("./mutation");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
