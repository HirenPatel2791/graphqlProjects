const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GrapgQLInt
} = graphql;

const TemplateType = new GraphQLObjectType({
  name: 'Template',
  fields: {
    
  }
});
