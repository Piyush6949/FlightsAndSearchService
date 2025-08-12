const { cityRepository } = require("../repositories/index");

const City = new cityRepository();

class cityService {
    async createCity(cityName) {
        try {
            const city = await City.createCity(cityName);
            return city;
        } catch (error) {
            console.log("Somenthing went wrong at Service Layer");
            throw{error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.deleteCity(cityId);
        } catch (error) {
            console.log("Somenthing went wrong at Service Layer");
            throw { error };
        }
    }

    async updateCity(cityId , data) {
        try {
            const city = await City.updateCity(cityId , data);
            return city;
        } catch (error) {
            console.log("Somenthing went wrong at Service Layer");
            throw { error };
        }
    }

    async getCity(cityName) {
        try {
            const city = await City.getCity(cityName);
            return city;
        } catch (error) {
            console.log("Somenthing went wrong at Service Layer");
            throw { error };
        }
    }
}

module.exports = cityService;