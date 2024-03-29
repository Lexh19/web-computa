import axios from "../plugins/axios"

const userToken =JSON.parse(localStorage.getItem("userData")).token

export const getprofilinstances = async params => {
  return await axios.get("/admin/instance", {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    params, 
  })
  
}
