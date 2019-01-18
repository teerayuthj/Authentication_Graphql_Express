const { GraphQLObjectType } = require("graphql");
const UserType = require("./user_type");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      resolve(parent, args, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQuery;
