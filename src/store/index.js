import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

const middlewares = process.env.NODE_ENV !== 'production' ? [createLogger()] : []
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        // modules
    },
    plugins: middlewares,
    strict: debug,
})