import * as actionTypes from './action-types'
import * as characters from '@/api/characters'
import init from '@/api/init'

export default {
  /**
   * Get user sops history
   * @param {Object} dispatch
   * @param {Object} commit
   * @param {Object} state
   */
  [actionTypes.GET_CHARACTERS] ({ dispatch, commit, state }) {
    characters.getCharacters({ commit })
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
