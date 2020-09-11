<template>
  <div class="home">
    <div class="container_wrapper">
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

html {
    box-sizing: border-box;
    font-family: PT Sans
}

html *,
html :after,
html :before {
    box-sizing: inherit
}

body,
button,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
li,
p,
ul {
    margin: 0;
    padding: 0
}

figure {
    line-height: 0
}

a {
    text-decoration: none
}

[role=button],
button {
    cursor: pointer
}

a,
button {
    outline: 0
}

ul {
    list-style-type: none
}

[role=button],
input {
    outline: 0
}
.home {
  display: flex;
  justify-content: center;
}
.container_wrapper {
  max-width: 900px;
  display: flex;
  // padding: 0 10px;
  width: 100%;
}
</style>
