const { CityRepository } = require('../repository/index');

class CityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data){
          try {
             const City = this.CityRepository.createCity(data);
             return City;
          } catch (error) {
            console.log("something went wrong at servive layer");
            throw(error);
          }
    }

    async deleteCity(cityId){
        try {
           const response = await this.CityRepository.deleteCity(cityId);
           return response;
        } catch (error) {
          console.log("something went wrong at servive layer");
          throw(error);
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await this.CityRepository.createCity(cityId,data);
            return city;
        } catch (error) {
          console.log("something went wrong at servive layer");
          throw(error);
        }
    }

    async getCity(cityId){
        try {
            const city = await this.CityRepository.getCity(cityId);
        } catch (error) {
          console.log("something went wrong at servive layer");
          throw(error);
        }
    }
}

module.exports = CityService;