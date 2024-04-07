const { AirportService }= require('../services/index');

const airportService = new AirportService();

const create = async(req,res) => {
       try {
          const response = await airportService.create(req.body);
          console.log(req.body);
          return res.status(201).json({
              data: response,
              success: true,
              message: "successfully creasted an airport",
              err: {}
          })
          
       } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succsss: false,
            message: "not able to create a new airport",
            err: error
          })
        }  
}

module.exports = {
    create,
}
