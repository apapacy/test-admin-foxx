const gql = require('graphql-sync');
const _ = require('lodash');
const user = require('./user');

module.exports = new gql.GraphQLObjectType({
  name: 'Mutation',
  fields: _.assign(
    {},
    user
  )
});
