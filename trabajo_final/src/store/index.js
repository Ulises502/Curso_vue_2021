import Vue from "vue";
import Vuex from "vuex";
import drawer from "./modules/drawer.js"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        drawer,
    },
});

export default store;
