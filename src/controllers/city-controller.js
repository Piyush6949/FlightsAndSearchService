const { cityService } = require("../services/index");

const CityService = new cityService();

const createCity = async (req,res) => {
    try {
        const city = await CityService.createCity(req.body);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully created a city",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city",
            err : error
        });
    }
}

// city/:id
const deleteCity = async (req,res) => {
    try {
        const response = await CityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: true,
            message: "Not able to delete a city",
            err: error
        });
    }
}

const updateCity = async (req,res) => {
    console.log(req.body);
    try {
        const city = await CityService.updateCity(req.params.id,req.body);
        res.status(200).json({
            data : city,
            success: true,
            message : "Successfully updated a city",
            err : {}
        })
    } catch (error) {
        res.status(500).json({
            data :{},
            success: false,
            message : "Not able to update the city",
            err : error
        })
    }
}

const getCity = async (req,res) => {
    try {
        const city = await CityService.getCity(req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully got the city",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            err: error
        })
    }
}

module.exports = {
    getCity,
    deleteCity,
    updateCity,
    createCity
}