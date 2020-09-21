import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
export default {
    namespaced: true,
    state: {
        cartProducts: [],
        realproduct: [],
        lengthProd: 0,
        test: [],
        categories: 0,
        nameGroupUrl: 0
    },
    getters: {
        items(state) {
            return state.items;
        },
        item: (state, getters) => (id) => {
            return getters.itemsMap[id];
        },
        getProducts: state => state.realproduct,
        getTest: state => state.test,
        categories: state => {
            return state.categories;
        },
        arrProduct: state => state.nameGroupUrl
    },
    mutations: {
        clearItems(state) {
            state.items = [];
        },
        ADD_PRODUCT: (state, payload) => {
            let id = payload.prod.id
            let name = payload.prod.productName
            payload.prod.qty = payload.qty
            let exist = state.cartProducts.some(o => o.id === id && o.productName === name);
            if (!exist) {
                state.cartProducts.push(payload.prod);
            }
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartProducts.splice(index, 1);
        },

        PLUS_QTY: (state, payload) => {
            state.cartProducts.forEach((element, i) => {
                if (element.productName == payload.productName && element.id == payload.id) {
                    state.cartProducts[i].qty += 1
                }
            });
        },
        MINUS_QTY: (state, payload) => {
            state.cartProducts.forEach((element, i) => {
                if (element.productName == payload.productName && element.id == payload.id) {
                    state.cartProducts[i].qty -= 1
                }
            });
        },
        CHANGE_COFF: (state, payload) => {
            state.cartProducts.forEach((element, i) => {
                if (element.productName == payload.a.productName && element.id == payload.a.id) {
                    state.cartProducts[i].price = element.fixPrice
                    let searchCof = payload.b;
                    let cof = element.options.find(exist => exist.value === searchCof).cof
                    let totalCof = state.cartProducts[i].price * cof
                    state.cartProducts[i].coffecient = cof
                    state.cartProducts[i].price = totalCof.toFixed()
                }
            })
        },
        LOAD_ITEM: (state, product) => {
            state.realproduct = [...state.realproduct, ...product]
            state.test = window.currentParamPage
        },
        SET_TODO: (state, payload) => {
            state.categories = payload
        },
        NEW_URL: (state, url) => {
            state.nameGroupUrl = url
        }
    },
    actions: {
        GET_TODO: async(context, payload) => {
            let url = 'http://www.prime-wood.ru/ofisnye-peregorodki/deli?_json=1'; // что то с опциями
            // let url = 'http://www.prime-wood.ru/metallicheskaya-mebel/seyfy?_json=1'; // что то без опций
            let { data } = await axios.get(url)
            context.commit('SET_TODO', data)
            let nameGroup = []
            for (let i = 0; i < data.tab_groups.length; i++) {
                if (data.options.length > 0) {
                    let element = `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=${data.product_id}&group_id=${data.tab_groups[i].group_id}&option_value_id=${data.options[0].option_value_id}`;
                    let elemArr = {}
                    let elemArrUrl = {}
                    elemArr[data.tab_groups[i].name] = element

                    for (let key in elemArr) {
                        fetch(elemArr[key], {
                                method: "GET",
                                credentials: "include",
                                withCredentials: true
                            })
                            .then((response) => response.json())
                            .then((json) => {
                                elemArrUrl[key] = json
                            });
                    }
                    nameGroup.push(elemArrUrl)
                } else {
                    let element = `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=${data.product_id}&group_id=${data.tab_groups[i].group_id}`;
                    let elemArr = {}
                    let elemArrUrl = {}
                    elemArr[data.tab_groups[i].name] = element
                    for (var key in elemArr) {
                        fetch(elemArr[key], {
                                method: "GET",
                                credentials: "include",
                                withCredentials: true
                            })
                            .then((response) => response.json())
                            .then((json) => {
                                elemArrUrl[key] = json
                            });
                    }
                    nameGroup.push(elemArrUrl)
                }
            }
            context.commit('NEW_URL', nameGroup)

        },

        loadItems(context) {
            var base_url = process.env.NODE_ENV !== 'production' ? 'https://prime-wood.ru/' : ''
            if (base_url !== 'production') {
                console.log('для разработки')
                let url = [
                    `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=17539&group_id=33&option_value_id=778`,
                    `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=17539&group_id=23&option_value_id=778`,
                    `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=17539&group_id=3&option_value_id=778`,
                    `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=17539&group_id=34&option_value_id=778`,
                    `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=17539&group_id=4&option_value_id=778`,
                    `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=17539&group_id=41&option_value_id=778`,
                    `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=17539&group_id=44&option_value_id=778`,
                    `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=17539&group_id=1&option_value_id=778`,
                ];


                for (let index = 0; index < url.length; index++) {
                    fetch(url[index], {
                            method: "GET",
                            credentials: "include",
                            withCredentials: true
                        })
                        .then((response) => response.json())
                        .then((json) => {
                            context.commit('LOAD_ITEM', json);
                        });

                }
            } else {
                console.log('для продакшена')

                var url = []
                let tab_groups = window.currentParamPage.tab_groups
                let product_id = window.currentParamPage.product_id
                for (let index = 0; index < tab_groups.length; index++) {
                    let urlString = `https://prime-wood.ru/index.php?route=checkout/vue/product_group&_product_id=${product_id}=&group_id=${tab_groups[index].group_id}`
                    url.push(urlString)
                }

                for (let index = 0; index < url.length; index++) {
                    fetch(url[index], {
                            method: "GET",
                            credentials: "include",
                            withCredentials: true
                        })
                        .then((response) => response.json())
                        .then((json) => {
                            context.commit('LOAD_ITEM', json);
                        });

                }
            }



        },
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
        },
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
        showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
        },
        showOrHiddenPopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
        },
        plusQty: (context, product) => {
            context.commit('PLUS_QTY', product);
        },
        minusQty: (context, product) => {
            context.commit('MINUS_QTY', product);
        },
        changeCoff: (context, product) => {
            context.commit('CHANGE_COFF', product);
        }

    }

};