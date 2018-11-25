const gql = require('graphql-sync');
const gqlType = require('../type');
const db = require('@arangodb').db;

module.exports = {
  User: {
    type: gqlType.User,
    args: {
    id: {
      type: gql.GraphQLString
    }
  },
  resolve: (_, {id}, context, info) => {
     return db.users.document(id);
    }
  },
  allUsers: {
    type: new gql.GraphQLList(gqlType.User),
    args: {
    },
    resolve: (_, {id}, context, info) => {
     return db.users.all().toArray();
    }
  }

}

module.exports._allUsersMeta = {
  type: new gql.GraphQLObjectType({
  name: '_allUsersMeta',
  //description: 'Пользователи',
  fields: {
    count: {
      type: gql.GraphQLInt,
      resolve: () => 100
    }
  },
  resolve: () => ({count: 200})
}),
resolve: () => ({count0: 300})

};
