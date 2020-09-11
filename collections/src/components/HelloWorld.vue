<template>
  <div class="l-container">
    <!-- <h1>{{ getCurrentProduct.name }}</h1> -->
    <!-- <b-row class="my-5">
      <b-col sm="7">
        <ProductSlider :productCartPosition="vertical" />
      </b-col>
      <b-col sm="5">
        <div class>
          <div class="product_functions">
            <span class="product-price">{{ productSum == 0 ? getCurrentProduct.price : productSum}}</span>
            <PlusMinusForProduct
              @More="More"
              @Less="Less"
              :getCurrentProduct="getCurrentProduct"
              :price="getCurrentProduct.price"
              :qty="getCurrentProduct.qty"
            />
            <button
              class="product-card-buy-button button-global button-primary-green"
              btnColor="btn btn-large btn-sucess"
              :class="{existToCart: existToCart(getCurrentProduct.id)}"
              @click="addProductToCart(getCurrentProduct)"
            >
              <b-icon v-if="existToCart(getCurrentProduct.id)" icon="cart-dash"></b-icon>
              <b-icon v-else icon="cart-plus"></b-icon>
              <span>В КОРЗИНУ</span>
            </button>
          </div>
          <modal>{{ getCurrentProduct.details }}</modal>
          <div class="product_options">
            <Options />
          </div>
          <div class="time_delivery">Сроки доставки: 3-7 дней</div>
          <div class="product__chars" style="overflow: hidden;width: 100%;">
            <div class="product__chars-item">
              <div class="product__chars-lbl">Форма стола</div>
              <div class="product__chars-val">Прямой</div>
            </div>

            <div class="product__chars-item">
              <div class="product__chars-lbl">Артикул</div>
              <div class="product__chars-val">В.СП-2</div>
            </div>
            <div class="product__chars-item">
              <div class="product__chars-lbl">Ширина</div>
              <div class="product__chars-val">120 см</div>
            </div>
            <div class="product__chars-item">
              <div class="product__chars-lbl">Глубина</div>
              <div class="product__chars-val">65 см</div>
            </div>
            <div class="product__chars-item">
              <div class="product__chars-lbl">Высота</div>
              <div class="product__chars-val">75 см</div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row> -->
    <Tabs />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import btn from "./Btn";
import stars from "./Stars";
import modal from "./Modal";

import ProductSlider from "./ProductSlider";
import PlusMinusForProduct from "./PlusMinusForProduct";
import Options from "./ProductOptionsForCart";
import Tabs from './ProductForTabs'

export default {
  data() {
    return {
      vertical: {
        vertical: false,
        bigImg: 12,
        miniImg: 12,
        totalCurrenSumm: 1,
        summaUnique: 1,
      },
      productSum: 0,
      productQty: 1,
    };
  },
  components: {
    btn,
    stars,
    modal,
    ProductSlider,
    PlusMinusForProduct,
    Options,
    Tabs
  },

  computed: {
    ...mapGetters("products", ["getProductsInCart"]),
  },

  methods: {
    ...mapActions("products", ["addProduct", "showOrHiddenModal"]),
    addProductToCart(product) {
      let payload = { qty: this.productQty, prod: product };
      this.addProduct(payload);
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },

    More(data) {
      this.productQty = data._qty;
      this.productSum = data._sum;
    },
    Less(data) {
      this.productQty = data._qty;
      this.productSum = data._sum;
    },
    existToCart(id) {
      let exist = this.getProductsInCart.some((o) => o.id === id);
      return exist;
    },
  },
};
</script>

<style lang="scss" scoped>
.l-container {
  width: 100%;
}
.product__chars {
  margin-top: 20px;
}

.product__chars-item {
  display: flex;
  font-size: 15px;
  border-bottom: 2px dotted #d4d4d4;
  justify-content: space-between;
  margin-bottom: 12px;
}

.product__chars-item:last-child {
  margin-bottom: 0;
}

.product__chars-lbl {
  color: #a0a0a0;
  padding-right: 4px;
}

.product__chars-lbl,
.product__chars-val {
  background-color: #fff;
  margin-bottom: -5px;
}

.product__chars-val {
  flex: none;
  min-width: 120px;
  padding-left: 4px;
  max-width: 330px;
}

.time_delivery {
  color: #00a75f;
  font-size: 15px;
  font-weight: 700;
}
.existToCart {
  background: #ff9e24 !important;
}
.product {
  &-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & button {
      width: 300px;
      margin: 0.3em 0;
    }
  }
  &-image {
    width: 300px;
  }
  &-info {
    width: 400px;
    align-self: flex-start;
  }
  &-title {
    font-weight: normal;
  }
  &-price {
    font-size: 2em;
    font-weight: bolder;
    position: relative;
    color: #ff9e24;
    padding-right: 24px;
    &:before {
      content: "РУБ";
      position: absolute;
      top: 0;
      height: 20px;
      width: 20px;
      font-size: 12px;
      right: 0px;
    }
  }
  &_functions {
    display: flex;
    & > * {
      margin-right: 10px;
    }
  }
  &-card-buy-button {
    & span {
      padding: 5px;
    }
  }
}
</style>
