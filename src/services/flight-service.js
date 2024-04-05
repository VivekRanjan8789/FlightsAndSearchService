const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime }  = require('../utils/helper');

class FlightService {
      constructor(){
         this.airplaneRepository = new AirplaneRepository();
         this.flightRepository = new FlightRepository();
      }
         
      async createFlight(data){
         try {
             if(!compareTime(data.arrivalTime,data.departureTime)){
                 throw {error: 'Arrival time can not be less than departure time'};
             }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
               ...data, totalSeats: airplane.capacity
            });
            return flight;
         } catch (error) {
            console.log("something went wrong in service layer");
            throw(error)
         }
      }

      async getFlightData(){
         // some code
      }
   
    } 
console.log(compareTime);

 module.exports = FlightService;
/**
 * {
 *  flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totlSeats -> fetch from airplane
 * }
 */