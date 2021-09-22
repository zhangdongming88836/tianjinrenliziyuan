import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import formStatus from './modules/form'
import getters from './getters'
import actions from '../actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ...actions,
    app,
    formStatus,
    errorLog,
    permission,
    tagsView,
    user
  },
  getters,
})

export default store
