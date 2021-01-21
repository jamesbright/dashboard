import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        showUser: false,
        showUsers: true,
        disabled:false
    },

    mutations: {
        userList(state, showUser) {
            state.showUser = showUser
        },
        users(state, showUsers) {
            state.showUsers = showUsers
        },
          disabled(state, disabled) {
            state.disabled = disabled
        }
    },
    getters: {
        showUser: state => state.showUser,
        showUsers: state => state.showUsers,
        disabled: state => state.disabled

    }

})