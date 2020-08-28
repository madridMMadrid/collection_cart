<template>
  <div class="wrapper_button_array">
    <div class="product-card-buy-count d-flex ai-c">
      <input class="product-card-buy-count-input" type="number" :value="value" />
      <div class="product-card-buy-count-controls">
        <div class="more" @click="moreCaunt()"></div>
        <div class="less" @click="lessCaunt()"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    moreCaunt() {
      this.value++;
    },
    lessCaunt() {
      if (this.value <= 1) return;
      this.value--;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper_button_array {
    & input[type="number"]::-webkit-inner-spin-button,
    & input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }
    & input[type="number"] {
      -moz-appearance: textfield;
    }
  .product {
    &-card {
      &-buy {
        display: flex;
        justify-content: space-around;
        background-color: #f9f8f3;
        overflow: hidden;
        padding: 9px 9px 9px 5px;
        align-items: center;
        &-button {
          background: #71c73b;
          border: none;
          height: 30px;
          border-radius: 3px;
          width: 30px;
          position: relative;
          &::before {
            content: "";
            background: url("https://prime-wood.ru/catalog/view/javascript/skin/images/icons.png")
              no-repeat 0 -80px;
            height: 20px;
            position: absolute;
            top: 5px;
            left: 5px;
            width: 20px;
          }
        }
        &-price {
          &-text {
            font-size: 25px;
          }
          &-currency {
            font-size: 13px;
            padding-left: 5px;
          }
        }
        &-count {
          margin: 0;
          &-input {
            border: 1px solid #e2e0d3;
            border-radius: 3px 0 0 3px;
            color: #a79e7e;
            height: 30px;
            padding: 2px;
            text-align: center;
            width: 30px;
            vertical-align: middle;
            margin: 0;
          }
          &-controls {
            & .more,
            .less {
              height: 15px;
              width: 20px;
              background: #f3f1ef;
              line-height: 0.9;
              -webkit-touch-callout: none; /* iOS Safari */
              -webkit-user-select: none; /* Chrome/Safari/Opera */
              -khtml-user-select: none; /* Konqueror */
              -moz-user-select: none; /* Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none;
              &:hover {
                cursor: pointer;
                box-shadow: 0 0 40px rgba(0, 0, 0, 0.1) inset;
              }
            }
            & .more {
              position: relative;
              border: 1px solid #e2e0d3;
              border-radius: 0 5px 0 0;
              border-left: none;
              &::before {
                content: "";
                -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
                background: url("https://prime-wood.ru/catalog/view/javascript/skin/images/icons.png") -85px -71px;
                height: 7px;
                margin: -4px 0 0 -5px;
                position: absolute;
                left: 50%;
                top: 50%;
                width: 10px;
              }
            }
            & .less {
              position: relative;
              border: 1px solid #e2e0d3;
              border-radius: 0 0px 5px 0;
              border-left: none;
              border-top: none;
              &::before {
                content: "";
                background: url("https://prime-wood.ru/catalog/view/javascript/skin/images/icons.png") -85px -71px;
                height: 7px;
                margin: -4px 0 0 -5px;
                position: absolute;
                left: 50%;
                top: 50%;
                width: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>