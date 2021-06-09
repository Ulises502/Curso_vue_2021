export default {
    state: {
        isOpen: '',
    },
    getters: {
        isOpen(state) {
            return state.isOpen;
        },
    },
    mutations: {
        SET_ISOPEN(state, isOpen) {
            state.isOpen = isOpen;
        },
    },
    actions: {
        changeIsOpen({ commit }, isOpen) {
            commit('SET_ISOPEN', !(isOpen));
        }
    }
}
