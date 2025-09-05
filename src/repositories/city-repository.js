const {City} = require("../models/index");

class cityRepository {
    
    async createCity(cityName) {
        try{
            const newCity = await City.create({cityName : cityName});
            return newCity;
        }
        catch(error){
            console.log("Error in city repository /n");
            throw{error};
        }
    }

    async deleteCity(cityId){
        try{
            const response = await City.destroy({
                where :{
                    id : cityId
                }
            });
            return response;
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
            return updatedCity;
        }
        catch(error){
            console.log("Error in city repository /n");
            throw{error};
        }
    }

    async getCity({cityName}) {
        try{
            const city = await City.findOne({
                where : {
                    cityName : cityName
                }
            });
            return city;
        }
        catch(error){
            console.log("Error in city repository /n");
            throw{error};
        }
    }

}

module.exports = cityRepository;
