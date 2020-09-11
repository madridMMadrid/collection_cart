<template>
  <div>
    <!-- <b-tabs content-class="mt-3">
      <b-tab title="Инфа о товаре" active></b-tab>
      <b-tab title="Элементы коллекции">
        <p>I'm the second tab</p>
      </b-tab>
      <b-tab title="Отзывы">
        <p>I'm a disabled tab!</p>
      </b-tab>
    </b-tabs>-->

    <div class="tabs">
      <input type="radio" name="tab-btn" id="tab-btn-1" value checked />
      <label for="tab-btn-1">Вкладка 1</label>
      <input type="radio" name="tab-btn" id="tab-btn-2" value />
      <label for="tab-btn-2">Вкладка 2</label>
      <input type="radio" name="tab-btn" id="tab-btn-3" value />
      <label for="tab-btn-3">Вкладка 3</label>

      <div id="content-1">
        <ProductFilter />
      </div>
      <div id="content-2">
        <div class="test">
          some text
        </div>

      </div>
      <div id="content-3">Содержимое 3...</div>
    </div>
  </div>
</template>

<script>
import ProductFilter from "./ProductTabsSorting";
export default {
  setup() {
    return {};
  },
  components: {
    ProductFilter,
  },
};
</script>

<style lang="scss" scoped>
.test {
  position: relative;
}
.tabs {
  font-size: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.tabs > input[type="radio"] {
  display: none;
}

.tabs > div {
  /* скрыть контент по умолчанию */
  display: none;
  border: 1px solid #e0e0e0;
  padding: 10px 15px;
  font-size: 16px;
}

/* отобразить контент, связанный с вабранной радиокнопкой (input type="radio") */
#tab-btn-1:checked ~ #content-1,
#tab-btn-2:checked ~ #content-2,
#tab-btn-3:checked ~ #content-3 {
  display: block;
}

.tabs > label {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  padding: 2px 8px;
  font-size: 16px;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  cursor: pointer;
  position: relative;
  top: 1px;
  margin-bottom: -0.5px;
}

.tabs > label:not(:first-of-type) {
  border-left: none;
}

.tabs > input[type="radio"]:checked + label {
  background-color: #fff;
  border-bottom: 1px solid #fff;
}
</style>