const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');


const server = new ApolloServer({typeDefs});

server
    .listen()
    .then(({url}) => 
        console.log(`
        Server running on ${url}
        Explore at https://studio.apollographql.com/sandbox
        `)
    )






