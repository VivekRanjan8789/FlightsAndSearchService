// const { CrudRepository } = require('../repository/index');

class CrudService{
    constructor(repository){
      this.repository =  repository;
    }
     async create(data){
        try {
            const result = this.repository.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud servive layer");
            throw(error);
        }
     }

     async destroy(id){
        try {
            const result = this.repository.destroy(data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud servive layer");
            throw(error);
        }
     }

     async get(id){
        try {
            const result = this.repository.get(id);
            return result;
        } catch (error) {
            console.log("something went wrong in crud servive layer");
            throw(error);
        }
     }

     async getAll(){
        try {
            const result = this.repository.getAll();
            return result;
        } catch (error) {
            console.log("something went wrong in crud servive layer");
            throw(error);
        }
     }

     async update(id,data){
        try {
            const result = this.repository.update(id,data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud servive layer");
            throw(error);
        }
     }
}

module.exports = CrudService