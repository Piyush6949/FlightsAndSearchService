const City = require("../models/index");

class cityRepository {
    
    async createCity(cityName) {
        try{
            const newCity = await City.create({ cityName: cityName });
            return newCity;
        }
        catch(error){
            console.log("Error in city repository /n");
            throw{error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where :{
                    id : cityId
                }
            });
        }
        catch(error){
            console.log("Error in city repository /n");
            throw{error};
        }
    }

    async updateCity(cityId , data) {
        try{
            const updatedCity = await City.update(data ,{
                where : {
                    id : cityId
                }
            });
            return updatedCityity;
        }
        catch(error){
            console.log("Error in city repository /n");
            throw{error};
        }
    }

    async getCity(cityId) {
        try{
            const city = await City.findByPk(cityId);
            return city;
        }
        catch(error){
            console.log("Error in city repository /n");
            throw{error};
        }
    }

}

module.exports = cityRepository;
