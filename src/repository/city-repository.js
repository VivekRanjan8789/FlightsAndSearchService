const { City } = require('../models/index');

class CityRepository{
     async createCity({ name }){
        try {
           await City.create({
            name
           });
           return City;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw(error);
        }
     }

     async deleteCity(cityId){
        try {
           await City.destroy({
            where: {
                id: cityId
            }
           }) ;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw(error);
        }

     }

     async updateCity(cityid, data){
        try {
            await City.update(data, {
                where: {
                    id: cityid
                }
            });
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw(error);
        }
     }
     
     async getCity(cityid){
        try {
            const city = await City.findByPk(cityid);
            return City;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw(error);
        }
     }


    
}

module.exports = CityRepository;