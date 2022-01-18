<template>
  <div class="home-hero">
    <div class="container">
      <!-- 轮播图 -->
      <ul class="home-swiper">
        <li>
          <img src="~assets/img/swiper1.png" alt="" />
        </li>
        <li>
            <img src="~assets/img/swiper2.png" alt="" />
          </li>
      </ul>
      <!-- 左按钮 -->
      <a href="#" class="lfbtn iconfont icon-zuo"></a>
      <a href="#" class="rgbtn iconfont icon-you-copy"></a>
      <!-- 小圆点 -->
      <div class="focuList">
        <a href="#"></a>
        <a href="#"></a>
      </div>
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
import "assets/css/iconfont.css";
import 'assets/js/swiper'
export default {
  name: "homeHero",
};
</script>

<style lang="less">
.home-hero {
  position: absolute;
  z-index: -3;
  top:140px;
  width: 1200px;
  height: 450px;
  overflow: hidden;

  .container {
    position: absolute;
    .home-swiper {
      ul {
        li {
          position: absolute;
          img {
            width: 1200px;
            height: 100%;
          }
        }
      }
    }

    .lfbtn,
    .rgbtn {
      text-align: center;
      line-height: 50px;
      width: 30px;
      height: 50px;
    }

    .lfbtn:hover,
    .rgbtn:hover {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
    }

    .lfbtn {
      position: absolute;
      left: 200px;
      top: 50%;
      transform: translateY(-50%);
    }

    .rgbtn {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .focuList {
      position: absolute;
      right: 50px;
      bottom: 22px;
      line-height: 20px;
      text-align: center;

      a {
        margin: 0 5px;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #fff;
      }
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
