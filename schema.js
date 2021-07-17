const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
    getAllCountries: [Country]!
    getCountryByName(name: String!): Country!
}

type Country {
    id: ID!
    name: String!
    capital: String!
    population: Int!
    region: String!
}

`

module.exports = typeDefs;