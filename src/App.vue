<template>
<div id="app">
  <home></home>
</div>
</template>

<script>
import Home from "content/home/Home";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
</style>
