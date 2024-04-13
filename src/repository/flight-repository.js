const flights = require('../models/flights');
const { Flights } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {
   
       #createFilter(data){
            let filter = {}
            if(data.arrivalAirportId){
                filter.arrivalAirportId = data.arrivalAirportId;
            }
            if(data.departureAirportId){
               filter.departureAirportId = data.departureAirportId
            }
            // if(data.minPrice && data.maxPrice) {
            //    Object.assign(filter,{
            //       [Op.and]: [
            //          {price: {[Op.lte]: data.maxPrice} },
            //          {price: {[Op.gte]: data.minPrice} }
            //       ]
            //    }) 
            // }
            let priceFilter = [];
            if(data.minPrice){
               // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
               priceFilter.push({price: {[Op.gte]: data.minPrice}});
            }
            if(data.maxPrice){
               // Object.assign(filter,{price: {[Op.lte]: data.maxPrice}});
               priceFilter.push({price: {[Op.lte]: data.maxPrice}});
            }
             console.log(filter);
            Object.assign(filter, {[Op.and]: priceFilter});
            // Object.assign(filter,{[Op.and]: [{price: {[Op.lte]: 7000} },{ price: {[Op.gte]: 4000}}]}) 
            return filter;
       }

      async createFlight(data) {
           try {
              const flight = await Flights.create(data);
              return flight;
           } catch (error) {
              console.log("something went wrong in the repository layer");
              throw(error)
           }
      }

      async getFlight(flightId){
         try {
             const flight = await Flights.findByPk(flightId)
             console.log(flight);
             return flight;
         } catch (error) {
            console.log("something went wrong in the repository layer");
            throw(error)
         }
      }

      async getAllFlights(filter){
         try {
              const filterObject = this.#createFilter(filter);
              const flight = await Flights.findAll({
                where: filterObject
              });
              console.log(flight);
              return flight;
         } catch (error) {
            console.log("something went wrong in the repository layer");
            throw(error)
         }
      }

      async updateFlight(flightId, data){
         try {
             console.log("IN REPOSITORY UPDATE", flightId, data);
               await Flights.update(data,{
               where:{
                  id: flightId
               }
             });
             return true;
            
         } catch (error) {
            console.log("something went wrong in the repository layer");
            throw(error)
         }
      }
}

module.exports = FlightRepository;
/*
{
   where: {
      arrivalAirportId: 2,
      departureAirportId: 
      price: {[Op.gte]: 4000}
   }

}
*/