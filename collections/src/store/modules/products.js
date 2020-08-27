export default {
    namespaced: true,
    state: {
        cartProducts: [],
        realproduct: [],
        lengthProd: 0,
    },
    getters: {
        items(state) {
            return state.items;
        },
        item: (state, getters) => (id) => {
            return getters.itemsMap[id];
        },
        getProductsInCart: state => state.cartProducts,
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
            // state.lengthProd = product.products.length
            state.realproduct = product
        },
    },
    actions: {

        loadItems(context) {
            let url = `https://prime-wood.ru/index.php?route=api/test/product_group&_product_id=18208&group_id=33&option_value_id=791`;
            // let url = `https://prime-wood.ru/index.php?route=checkout/test/cart/info`;

            fetch(url, {
                method: "GET",
                credentials: "include",
                withCredentials: true
            })
                .then((response) => response.json())
                .then((json) => {
                    context.commit('LOAD_ITEM', json);
                });
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

