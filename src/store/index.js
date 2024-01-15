import axios from "../plugins/axios"


export default ({
  state: {
    index: [],
  },
  getters: {
    getindex: state => state.index,
  },
  actions: {
    async fetchIndex({ commit }) {
      try {
        const bearerToken = '100|laravel_sanctum_OLo5c13PJ4L21UEQL69Dc7N9WFRgTxWmesUc9V4I2256144a'

        const config = {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }

        const data = await axios.get(
          "/admin/attendances?per_page=12&keyword=&year=&month=",
          config,
        )

        commit("SET_INDEX", data.data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
  mutations: {
    SET_INDEX(state, index) {
      state.index = index
    },
  },
})
