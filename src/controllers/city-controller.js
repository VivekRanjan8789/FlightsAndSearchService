const { CityService } = require('../services/index');

const cityService = new CityService();
/**
 * for create
 * POST
 * data -> req.body
 */
const create = async (req, res) =>{
    try {
         const city = await  cityService.createCity(req.body);
         return res.status(201).json({
            data: city,
            success: true,
            message: "successfully created a city",
            err: {}
         });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succsss: false,
            message: "not able to create a city",
            err: error
        })
    }
}

//DELETE -> /city/:id
const destroy = async (req, res) => {
    try{
        const response = await  cityService.deleteCity(req.params.id);
         return res.status(200).json({
            data: response,
            success: true,
            message: "successfully deleted a city",
            err: {}
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succsss: false,
            message: "not able to delete a city",
            err: error
        })
    }
}


// GET -> /city/:id
const get = async (req, res) =>{
    try{
        const city = await  cityService.getCity(req.params.id);
         return res.status(200).json({
            data: city,
            success: true,
            message: "successfully fetched a city",
            err: {}
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succsss: false,
            message: "not able to get a city",
            err: error
        })
    }
}

//getAll -> /city
const getAll = async (req,res) =>{
     try {
        console.log(req.query);
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "successfully fetched a city",
            err: {}
        })

     } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succsss: false,
            message: "not able to fetch all cities",
            err: error
        })
     }
}


//PATCH -> /city/:id -> re.body
const update = async (req, res) =>{
    try{
        const response = await cityService.updateCity(req.params.id, req.body);
         return res.status(200).json({
            data: response,
            success: true,
            message: "successfully updated a city",
            err: {}
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succsss: false,
            message: "not able to update a city",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}