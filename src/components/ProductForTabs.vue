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
      <input type="radio" class="tabs_input_hidden no_style" name="tab-btn" id="tab-btn-1" value checked />
      <label class="tabs_label" for="tab-btn-1">
        <span>Элементы комплектации</span>
      </label>
      <input type="radio" class="tabs_input_hidden no_style" name="tab-btn" id="tab-btn-2" value />
      <label class="tabs_label" for="tab-btn-2">
        <span>Информация коллекции</span>
      </label>
      <input type="radio" class="tabs_input_hidden no_style" name="tab-btn" id="tab-btn-3" value />
      <label class="tabs_label" for="tab-btn-3">
        <span>Отзывы</span>
      </label>
       <input type="radio" class="tabs_input_hidden no_style" name="tab-btn" id="tab-btn-4" value />
      <label class="tabs_label" for="tab-btn-4">
        <span>Вопрос ответ</span>
      </label>

      <div class="tabs_content" id="content-1">
        <ProductFilter />
      </div>
      <div class="tabs_content" id="content-2">
        <div class="test">some text</div>
      </div>
      <div class="tabs_content" id="content-3">Содержимое 3...</div>
      <div class="tabs_content" id="content-4">Содержимое 4...</div>
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

.tabs > input[type="radio"].tabs_input_hidden {
  display: none;
}

.tabs > div.tabs_content {
  /* скрыть контент по умолчанию */
  display: none;
  font-size: 15px;
}

/* отобразить контент, связанный с вабранной радиокнопкой (input type="radio") */
#tab-btn-1:checked ~ #content-1,
#tab-btn-2:checked ~ #content-2,
#tab-btn-3:checked ~ #content-3 {
  display: block;
}

.tabs > label.tabs_label {
  display: inline-block;
  text-align: center;
  vertical-align: text-bottom;
  user-select: none;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 5px 5px 0 0;
  padding: 2px 8px;
  font-size: 14px;
  color: #ada587;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  cursor: pointer;
  position: relative;
  top: 1px;
  margin-bottom: -0.5px;
  & span {
    display: flex;
    margin: auto;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
}

.tabs > label.tabs_label:not(:first-of-type) {
  margin-left: 4px;
}

.tabs > input[type="radio"].tabs_input_hidden:checked + label.tabs_label {
  background-color: #fff;
  border-bottom: 1px solid #fff;
  height: 34px;
  font-weight: 700;
  color: #56504c;
}
</style>