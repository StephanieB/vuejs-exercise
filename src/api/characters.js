import * as mutationTypes from './../store/mutation-types'
import axios from 'axios'

// Get all
export function getCharacters ({ commit }) {
  // Ajax request
  axios
    .get('characters')
    .then(response => {
      // Handle success
      if (response.data) {
        commit(mutationTypes.SET_CHARACTERS, response.data)
        commit(mutationTypes.SET_CHARACTERS_LOADED, true)
      } else {
        console.log('response.data not found.')
      }
    })
    .catch(error => {
      // Handle error
      console.log(error)
    })
}
