import * as actionTypes from './action-types'
import * as characters from '@/api/characters'
import init from '@/api/init'

export default {
    /**
     * Get user sops history
     * @param dispatch
     * @param commit
     * @param state
     * @param page
     * @param limit
     */
    [actionTypes.GET_CHARACTERS] ({ dispatch, commit, state }, { page, limit }) {
        console.log(page)
        console.log(limit)
        characters.getCharacters({ commit, state }, { page, limit })
    },
    /**
     * Init
     * @param {Object} dispatch
     * @param {Object} commit
     * @param {Object} state
     * @param {Function} next
     */
    [actionTypes.INIT] ({ dispatch, commit, state }, next) {
        init({ dispatch, commit, state }, next)
    }
}
