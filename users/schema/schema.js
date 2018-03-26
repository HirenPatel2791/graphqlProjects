const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

// const users = [
//   { id: '23', firstName: 'Bill', age: 25},
//   { id: '47', firstName: 'Hiren', age: 26}
// ];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt}
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString }},
      resolve(parentValue, args) {
        //return _.find(users, { id: args.id });
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(resp => resp.data); // cause response is nested as data :{ response } in axios
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
