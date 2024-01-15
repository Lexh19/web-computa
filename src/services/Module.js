import axios from 'axios'

const baseURL = 'https://attendance.computa.teknoreka.com/api'  

export function getDate() {
  return axios.get(`${baseURL}/admin/date`)
}

export function getIndex() {
  return axios.get(`${baseURL}/admin/attendances?per_page=12`)
}


