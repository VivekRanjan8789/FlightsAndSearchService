const { CityRepository } = require('../repository/index');

class CityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(){
          try {
             const City = this.CityRepository.createCity(data);
             return City;
          } catch (error) {
            console.log("something went wrong at servive layer");
            throw(error);
          }
    }

    async deleteCity(){
        try {
           const response = await this.CityRepository.deleteCity(CityId);
           return response;
        } catch (error) {
          console.log("something went wrong at servive layer");
          throw(error);
        }
    }

    async updateCity(){
        try {
            const city = await this.CityRepository.createCity(cityId,data);
            return city;
        } catch (error) {
          console.log("something went wrong at servive layer");
          throw(error);
        }
    }

    async getCity(){
        try {
            const city = await this.CityRepository.getCity(cityId);
        } catch (error) {
          console.log("something went wrong at servive layer");
          throw(error);
        }
    }
}

module.exports = CityService;