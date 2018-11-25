const gql = require('graphql-sync');
const graphqlType = require('./index')

module.exports = new gql.GraphQLObjectType({
  name: 'User',
  description: 'Пользователи',
  fields: () => ({
    id: {
      type: gql.GraphQLString,
      resolve: (user) => user._key
    },
    name: {
      type: gql.GraphQLString,
    },
  })
});
