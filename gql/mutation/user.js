const gql = require('graphql-sync');
const gqlType = require('../type');
const db = require('@arangodb').db;
const _ = require('lodash');

module.exports = {
  createUser: {
    type: gqlType.User,
    args: {
      name: {
        type: gql.GraphQLString
      }
    },
    resolve: (root, user, context, info) => {
      id = db.users.save(user);
      return _.assign(user, id);
    }
  },
  updateUser: {
    type: gqlType.User,
    args: {
      id: {
        type: gql.GraphQLString
      }
    },
    resolve: (root, user, context, info) => {
      id = db.users.save(user);
      return _.assign(user, id);
    }
  },
  deleteUser: {
    type: gqlType.User,
    args: {
      id: {
        type: gql.GraphQLString
      }
    },
    resolve: (root, user, context, info) => {
      id = db.users.save(user);
      return _.assign(user, id);
    }
  },
}
