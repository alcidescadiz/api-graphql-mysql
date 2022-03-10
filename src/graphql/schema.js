var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String,
    getData(id:Int): [Data],
    getDatabyName(first_name:String): [Data],
    getUser: [User],
    getUserById(id:Int!): User,
  }

  type Mutation {
    updateData(id: Int!, first_name: String!): [Data],
    createUser(email: String!, nombre: String!, imagen: String!, estado: String!): User,
  }

  type Data {
    id: Int
    email: String
    first_name: String
    last_name: String
    avatar: String
  }

  type User {
    id: Int
    email: String
    nombre: String
    imagen: String
    estado: String
  }
`);

module.exports = {
  schema
}