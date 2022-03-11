import { createStore } from 'vuex'

const { default: axios } = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/auth'
});

const store = createStore({
    state: {
        status: '',
        user: {
            user_id: -1,
            token: '',
        },
    },
    mutations: {
        setStatus: function (state, status) {
            state.status = status;
        },
        logUser: function (state, user) {
            state.user = user;
        },
    },
    actions: {
        login: ({commit}, userInfos) => {
            return new Promise((resolve, reject) => {
                commit('setStatus', 'loading');
                instance.post('/login', userInfos)
                .then(function (response) {
                    commit('setStatus', '');
                    commit('logUser', 'response.data');
                    resolve(response);
                })
                .catch(function (error) {
                    commit('setStatus', 'login_error');
                    reject(error);
                });
            }); 
        },

        createAccount: ({commit}, userInfos) => {
            return new Promise((resolve, reject) => {
                commit;
                instance.post('/', userInfos)
                .then(function (response) {
                    commit('setStatus', 'created');
                    resolve(response);
                })
                .catch(function (error) {
                    commit('setStatus', 'create_error');
                    reject(error);
                });
            }); 
        }
    }
})

export default store;
