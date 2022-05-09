import { globalMixin } from 'common/js/global-mixin'
import { utils } from '@/js/utils'
import i18n from 'common/js/i18n'
import router from './router/router'
import store from './store/store'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.mixin(globalMixin)
Vue.mixin(utils)

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
