<template>
  <div class="home-hero">
    <div class="container">
      <!-- 轮播图 -->
      <home-swiper class="sw"></home-swiper>
      <!-- 右侧tab栏 -->
      <div class="header-tab">
        <div class="item">
          <a href="#" v-for="item in 24" :key="item">
            <img src="~assets/img/xiaomi4.png" alt="图片" />
            <span>Xiaomi Mix4</span>
          </a>
        </div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
      </div>
    </div>
  </div>
</template>

<script>
import homeSwiper from "@/components/content/navBar/homeSwiper";
import "assets/js/swiper";
export default {
  name: "homeHero",
  components: {
    homeSwiper,
  },
};
</script>

<style lang="less">
.home-hero {
  position: absolute;
  z-index: -3;
  top: 140px;
  width: 1200px;
  height: 450px;
  overflow: hidden;

  .container {
    .sw{
      position: absolute;
      left:200px;
      width: 1000px;
    }
    // tab栏
    .header-tab {
      position: absolute;
      top: 0;
      left: 200px;
      height: 460px;
      width: 100%;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      .item {
        padding: 5px 15px;
        display: none;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;

        a {
          float: left;
          display: block;
          width: 256px;
          height: 76px;
          display: flex;
          align-items: center;

          span:hover {
            color: #ff6700;
          }

          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
