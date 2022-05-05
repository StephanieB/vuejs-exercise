import * as mutationTypes from './../store/mutation-types'
import axios from 'axios'

export default function ({ commit }, next) {
    // Config axios
    axios.defaults.baseURL = 'https://gateway.marvel.com/v1/public/'
    axios.defaults.headers.common.accept = 'application/json'
    axios.defaults.params = {}
    axios.defaults.params.apikey = '7f7b72c444604f7f8c26859df5c09a5e'
    // Set app loaded then keep the navigation going
    commit(mutationTypes.SET_APP_LOADED, true)
    next()
}
