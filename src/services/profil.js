import axios from "../plugins/axios"

const userToken =JSON.parse(localStorage.getItem("userData")).token

export const getprofil = async params => {
  return await axios.get("/admin/profile", {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    params, 
  })
  
}
