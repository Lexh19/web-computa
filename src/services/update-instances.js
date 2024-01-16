import axios from "../plugins/axios"

export const updateinstances = async params => {

  return await axios.post("/admin/instance/update-data",params) 
}
