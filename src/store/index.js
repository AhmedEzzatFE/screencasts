import Vue from "vue";
import Vuex from "vuex";
import Api from "../service/api";
Vue.use(Vuex);
export default new Vuex.Store({
  // ...
  state: { videos: [] },
  mutations: {
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
  },
  actions: {
    async loadVideos({ commit }) {
      let res = await Api().get("/data");
      let VidRes = res.data.map((v) => v.attributes);
      console.log(VidRes);
      commit("SET_VIDEOS", VidRes);
    },
  },
  modules: {},
});
