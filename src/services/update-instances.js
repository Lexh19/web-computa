import axios from "../plugins/axios"

export const update = async params => {

  return await axios.post("/admin/instance/update-data",params) 
}
