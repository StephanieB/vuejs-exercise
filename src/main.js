import { utils } from '@/js/utils'
import router from './router/router'
import store from './store/store'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.mixin(utils)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
