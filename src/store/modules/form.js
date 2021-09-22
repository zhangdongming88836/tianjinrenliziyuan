import _ from 'lodash'
// 记录表单状态 false 未变 true 变动

const formStatus = {
  state: {
    release: false,
    build: false,
  },
  mutations: {
    SET_FORM_STATUS: (state, status) => {
      _.forEach(status, (value, key) => {
        state[key] = value
      })
    },
  },
  actions: {
    setFormStatus({ commit }, status) {
      commit('SET_FORM_STATUS', status)
    },
  },
}

export default formStatus
