import axios from "../plugins/axios"

const userToken =JSON.parse(localStorage.getItem("userData")).token

export const getlist = async params => {
  return await axios.get("/admin/attendances", {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    params, 
  })
  
}

export const getdate = async params => {
  return await axios.get("/admin/date", {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    params, 
  })
  
}

