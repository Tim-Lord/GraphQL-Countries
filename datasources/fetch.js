const { RESTDataSource } = require('apollo-datasource-rest');

class CountriesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://restcountries.eu/rest/v2/'
    }

    countryReducer(country) {
        return {
            name: country.name,
            capital: country.capital,
            population: country.population,
            region: country.region
        }
    }

    async getAllCountries() {
        const response = await this.get('all');

        return Array.isArray(response)
            ? response.map(country => this.countryReducer(country))
            : []
    }

    async getCountryByName({name}) {
        const response = await this.get(`name/${name}`);

        return this.countryReducer(response[0])
    }
}

module.exports = CountriesAPI