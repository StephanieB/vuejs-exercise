import * as mutationTypes from '@/store/mutation-types'
import * as helper from '@/js/helper'
import axios from 'axios'

export function getCharacters ({ commit, state }, { limit, page }) {
    if (page !== state.currentCharactersPage) {
        const offset = helper.getOffset(limit, page)
        commit(mutationTypes.SET_CHARACTERS_LOADED, false)
        axios
            .get('characters?offset=' + offset + '&limit=' + limit)
            .then(response => {
                // Handle success
                if (response.data) {
                    console.log(response)
                    commit(mutationTypes.SET_CHARACTERS, response.data)
                    commit(mutationTypes.SET_CHARACTERS_LOADED, true)
                    commit(mutationTypes.SET_CURRENT_CHARACTERS_PAGE, page)
                } else {
                    console.log('response.data not found.')
                }
            })
            .catch(error => {
                // Handle error
                console.log(error)
            })
    }
}
