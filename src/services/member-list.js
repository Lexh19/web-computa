import axios from "../plugins/axios"

const userToken =JSON.parse(localStorage.getItem("userData")).token

export const getlistmember = async params => {
  return await axios.get("/admin/staff?keyword=&order_by=name&direction=asc&per_page", {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    params, 
  })
  
}
