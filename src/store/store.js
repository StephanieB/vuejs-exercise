import actions from '@/store/actions'
import mutations from '@/store/mutations'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    mutations,
    state: {
        appLoaded: false,
        characters: [],
        charactersLoaded: false,
        charactersTotal: 0,
        currentCharactersPage: 1,
        showGlobalLoader: false
    }
})
