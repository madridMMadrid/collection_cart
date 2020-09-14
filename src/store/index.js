import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './modules/cart';
import products from './modules/products';
import moreproducts from './modules/moreproducts';

export const store = new Vuex.Store({
    modules: {
        cart,
        products,
        moreproducts
    },
    strict: process.env.NODE_ENV !== 'production'
})