const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const CountriesAPI = require('./datasources/fetch');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        countriesAPI: new CountriesAPI()
    })
});

server
    .listen()
    .then(({url}) => 
        console.log(`
        Server running on ${url}
        Explore at https://studio.apollographql.com/sandbox
        `)
    )






