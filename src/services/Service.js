import BaseService from "./BaseService"

class Servis extends BaseService {

  constructor(){
    super(this.prefix)
  }
}

export default new Servis('Name')
