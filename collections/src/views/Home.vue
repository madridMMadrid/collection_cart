<template>
  <div class="home">
    <div class="container">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss">
    @import "~@/assets/styles/forProduct.scss";
    @import "~@/assets/styles/globalStyle.scss";
</style>
