import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        items: getProducts()
    },
    getters: {
        items(state) {
            return state.items;
        },
        itemsMap(state) {
            let itemsMap = {};

            for (let i = 0; i < state.items.length; i++) {
                let product = state.items[i];
                itemsMap[product.id_product] = product;
            }

            return itemsMap;
        },
        item: (state, getters) => (id) => {
            return getters.itemsMap[id];
        }
    },
    mutations: {
        clearItems(state) {
            state.items = [];
        }
    },
    actions: {

    }

};

function getProducts() {
    return [{
            id_product: 100,
            title: 'Мебель для персонала Эконом 1',
            price: 36000
        },
        {
            id_product: 200,
            title: 'Мебель для персонала Эконом 2',
            price: 25000
        },
        {
            id_product: 300,
            title: 'Мебель для персонала Эконом 3',
            price: 30000
        },
        {
            id_product: 101,
            title: 'Мебель для персонала Эконом 1',
            price: 36000
        },
        {
            id_product: 202,
            title: 'Мебель для персонала Эконом 2',
            price: 25000
        },
        {
            id_product: 303,
            title: 'Мебель для персонала Эконом 3',
            price: 30000
        }
    ]
}