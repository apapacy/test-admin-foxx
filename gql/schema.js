const gql = require('graphql-sync');
const query = require('./query');
const mutation = require('./mutation');

module.exports = new gql.GraphQLSchema({
  query,
  mutation
})
