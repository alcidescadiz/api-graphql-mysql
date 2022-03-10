var express = require('express');
var cors = require('cors')
require('dotenv').config()


var app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))


var { graphqlHTTP } = require('express-graphql');
var {schema} = require('./graphql/schema')
var {root}= require('./graphql/rootValue')

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const port = process.env.PORT
app.listen(port, () => console.log(`Server in localhost port ${port} with /graphql`));