const { ApolloServer } = require('apollo-server');

const fs = require('fs');
const path = require('path');

const typeDefs = fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf-8'
)

const resolvers = {
    Query: {
        getResult: () => 'Just a refresher on working with GraphQL'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen()
    .then(({url}) => 
        console.log(`Server is running on ${url}`)
    )
