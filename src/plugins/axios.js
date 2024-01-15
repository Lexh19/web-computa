import axios from 'axios'

const config = axios.create({
  baseURL:"https://attendance.computa.teknoreka.com/api",

})

export default config
