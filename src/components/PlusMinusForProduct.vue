<template>
  <div>
    <div class="product-card-buy-count d-flex ai-c">
      <div class="product-card-buy-count-controls">
        <input class="product-card-buy-count-input" v-model="ProdUniqueQty" value="qty" />
        <div class="wrapper_iterator">
          <div class="more" @click="moreCaunt()"></div>
          <div class="less" @click="lessCaunt()"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: ["price", "qty", "getCurrentProduct"],
  data() {
    return {
      ProdUniqueQty: this.qty,
      ProdUniqueSum: this.price,
    };
  },
  watch: {
    price() {
      this.ProdUniqueSum = this.price * this.qty;
    },
  },
  methods: {
    ...mapActions("products", ["plusQty", "minusQty"]),

    moreCaunt() {
      this.ProdUniqueQty += 1;
      this.ProdUniqueSum += this.price;
      let result = { _qty: this.ProdUniqueQty, _sum: this.ProdUniqueSum };
      this.$emit("More", result);
      this.plusQty(this.getCurrentProduct);
    },
    lessCaunt() {
      if (this.ProdUniqueQty <= 1) {
        return;
      }
      this.ProdUniqueQty -= 1;
      this.ProdUniqueSum -= this.price;
      let result = { _qty: this.ProdUniqueQty, _sum: this.ProdUniqueSum };
      this.$emit("Less", result);
      this.minusQty(this.getCurrentProduct);
    },
  },
};
</script>
<style lang="scss" scoped>
.product-card-buy {
  &-count {
    margin: 0;
    height: 100%;
    &-controls {
      display: flex;
      height: 100%;
      & .more,
      .less {
        width: 25px;
        height: 50%;
        background: #c5c4c4;
        line-height: 0.9;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
        position: relative;

        &:hover {
          cursor: pointer;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.1) inset;
        }
        &:before {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      & .more {
          border-radius: 0 5px 0 0;
        &:before {
          content: "+";
        }
      }
      & .less {
          border-radius: 0 0 5px 0;
        &:before {
          content: "-";
        }
      }
    }
  }
  &-price {
    display: flex;
    &-currency {
      line-height: inherit;
      top: 0;
    }
  }
  &.jc-sb {
    align-items: center;
  }
}
.box {
  display: flex;
  align-items: stretch;
  & div {
    background: #888;
  }
}
.product-card {
  max-width: 216px;
  margin: 10px 12px 10px 0;
  flex: 0 0 24%;
  border: 1px solid #e2e0d3;
  text-align: center;
  &:nth-child(4n) {
    margin-right: 0;
  }
}

.product-card-title {
  padding: 10px 0;
  font-size: 15px;
  font-weight: 600;
  color: #595959;
}

.product-card-scale {
  padding-top: 10px;
  border-top: 1px solid #e2e0d3;
}

.product-card-scale-size {
  display: inline-block;
  margin: 5px;
  color: #858585;
  font-size: 13px;
}

.product-card-info {
  margin: 5px 0;
}

.product-card-info-text {
  font-size: 13px;
}

.product-card-info-text.green {
  color: #00a75f;
}

.product-card-info-text.black {
  color: #858585;
}

.product-card-actions {
  text-align: right;
  margin: 5px 10px;
}

.product-card-icon {
  fill: #858585;
}

.product-card-buy {
  padding: 5px 10px;
  margin-top: 5px;
  background-color: #f9f8f3;
}

.product-card-buy-price {
  color: #595959;
  width: 100%;
  justify-content: center;
}

.product-card-buy-price-text {
  font-size: 25px;
}

.product-card-buy-price-currency {
  margin-left: 3px;
  font-size: 13px;
  text-transform: uppercase;
  vertical-align: top;
}
.product-card-buy-count-input {
  max-width: 30px;
  padding: 5px;
  border: 1px solid #e2e0d3;
  text-align: center;
  color: #b8ad87;
  font-size: 15px;
  border-radius: 5px 0px 0px 5px;

  & .wrapper_iterator {
    display: flex;
  }
}

.product-card-buy-count-button {
  display: block;
  padding: 3px;
  background-color: #ebe8e5;
  border: 1px solid #e2e0d3;
  border-left: 0 solid;
  border-radius: 0;
  line-height: 0;
  &:last-child {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
    border-bottom: 0 solid #e2e0d3;
    border-left: 1px solid #e2e0d3;
    border-right: 0 solid;
  }
}

.product-card-buy-count-icon {
  width: 8px;
  height: 8px;
  fill: #ada587;
}

.product-card-buy-button {
  padding: 5px 8px;
}

.product-card-buy-icon {
  fill: #fff;
  vertical-align: middle;
}
</style>