const city = require("../models/index");

async function createCity(cityName){
    await city.create({cityName:cityName});
}
