import Vue from 'vue';
import App from './App.vue';

import './registerServiceWorker'
import { store } from './store';
import router from './router';
// import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

import VueDadata from 'vue-dadata'
Vue.use(VueDadata)

import VueLodash from 'vue-lodash'
import lodash from 'lodash'
Vue.use(VueLodash, { name: 'custom', lodash: lodash })

import ProductZoomer from 'vue-product-zoomer'
Vue.use(ProductZoomer)

// Install BootstrapVue
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
// import VueCarousel from '@chenfengyuan/vue-carousel';
// Vue.use(BootstrapVueIcons)

Vue.use(rate)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#collection_cart')