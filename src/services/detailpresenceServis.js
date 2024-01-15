import axios from "../plugins/axios"

const userToken =JSON.parse(localStorage.getItem("userData")).token

export const getdetail = async params => {
  return await axios.get("/admin/attendances/9a2e18f0-8ff7-4264-8e59-5704fc7e9383?keyword=&order_by=name&direction=asc", {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    params, 
  })
  
}
