import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    test: "test",
    selectedGraph: "bar"
  },
  mutations: {
    switchGraph(state, name) {
      console.log("changing store " + name);
      state.selectedGraph = name;
    }
  },
  getters: {
    selectedGraph: state => state.selectedGraph
  }
});
