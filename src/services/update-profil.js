import axios from "../plugins/axios"

export const updateprofil = async params => {

  return await axios.post("/admin/profile/update-data",params) 
}
