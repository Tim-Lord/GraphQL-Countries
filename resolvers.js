module.exports = {
    Query: {
        getAllCountries: ( parent, args, {dataSources}) => 
            dataSources.countriesAPI.getAllCountries(),
        getCountryByName: (parent, {name}, {dataSources}) =>
            dataSources.countriesAPI.getCountryByName(name)
    }
}