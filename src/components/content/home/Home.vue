<template>
  <div class="Home">
    <header>
      <top-nav></top-nav>
      <bottom-nav></bottom-nav>
    </header>
    <home-hero></home-hero>
    <home-sub></home-sub>
    <content></content>
    <fixed-nav></fixed-nav>
    <fot></fot>
  </div>
</template>

<script>
import homeHero from "@/components/content/home/homeHero";
import homeSub from "@/components/content/home/homeSub";
import Content from "@/components/content/home/content";
import topNav from "content/navBar/topNav";
import bottomNav from "content/navBar/bottomNav";
import fixedNav from "content/navBar/fixedNav";
import Fot from "content/navBar/footer";
import Swp from "content/navBar/homeSwiper";
export default {
  name: "Home",
  components: {
    homeHero,
    homeSub,
    topNav,
    bottomNav,
    Content,
    fixedNav,
    Fot,
    Swp,
  },
};
</script>

<style scoped>
</style>
