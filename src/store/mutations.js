import * as mutationTypes from './mutation-types'

export default {
    [mutationTypes.SET_APP_LOADED] (state, appLoaded) {
        state.appLoaded = appLoaded
    },
    [mutationTypes.SET_CHARACTERS_LOADED] (state, charactersLoaded) {
        state.charactersLoaded = charactersLoaded
    },
    [mutationTypes.SET_CHARACTERS] (state, characters) {
        state.characters = characters?.data?.results
        state.charactersTotal = characters?.data?.total
    },
    [mutationTypes.SET_CURRENT_CHARACTERS_PAGE] (state, page) {
        state.currentCharactersPage = page
    }
}
