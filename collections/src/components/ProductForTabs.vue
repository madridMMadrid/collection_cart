<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="Инфа о товаре" active>
        <ProductFilter />
      </b-tab>
      <b-tab title="Элементы коллекции">
        <p>I'm the second tab</p>
      </b-tab>
      <b-tab title="Отзывы">
        <p>I'm a disabled tab!</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import ProductFilter from './ProductTabsSorting'
export default {
  setup() {
    return {};
  },
  components: {
      ProductFilter
  }
};
</script>

<style lang="scss" scoped>
</style>