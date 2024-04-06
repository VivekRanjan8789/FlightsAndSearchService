const { AirportService }= require('../services/index');

const airportService = new AirportService();

const create = async(req,res) => {
       try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
          const response = await airportService.create(flightRequestData);
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
