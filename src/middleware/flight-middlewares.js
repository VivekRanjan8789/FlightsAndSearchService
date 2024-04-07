const { ClientErrorCodes } = require('../utils/error-codes');
const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price 
    ) {
         // if any of the bad params is missing we can come inside if
         res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for create flight",
            err: "missing mandatory properties to create a flight"
         });
    }
    next();
}

module.exports = {
    validateCreateFlight
}
