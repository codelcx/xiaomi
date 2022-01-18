<template>
  <div class="fixed-nav">
    <div class="item">
      <i class="iconfont icon-huidingbu"></i>
      <p>手机APP</p>
      <div class="download">
        <img src="~assets/img/download.png" alt="" />
        <p>扫码领取</p>
        <p>新人百元礼包</p>
      </div>
    </div>
    <div class="item">
      <i class="iconfont icon-shoujiapp"></i>
      <p>个人中心</p>
    </div>
    <div class="item">
      <i class="iconfont icon-shouhou"></i>
      <p>售后服务</p>
    </div>
    <div class="item">
      <i class="iconfont icon-kefu1"></i>
      <p>人工客服</p>
    </div>
    <div class="item">
      <i class="iconfont icon-cart"></i>
      <p>购物车</p>
    </div>
    <div class="back">
      <i class="iconfont icon-huidingbu"></i>
      <p>回顶部</p>
    </div>
  </div>
</template>

<script>
import "assets/css/iconfont.css";
export default {
  name: "fixedNav",
};
</script>

<style lang="less" scoped>
.fixed-nav {
  z-index: 10;
  position: fixed;
  top: 100px;
  right: 0;;
  background-color: #fff;
  width: 84px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  .item {
    i {
      font-size: 30px !important;
    }

    border-bottom: 1px solid #ccc;

    color: rgb(136, 128, 128);
    height: 92px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .back {
    i {
      font-size: 30px !important;
    }

    background-color: #fff;
    color: rgb(136, 128, 128);
    height: 92px;
    width: 100%;
    position: absolute;
    bottom: -112px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .back:hover {
    color: #ff6700;
  }

  .item:first-child {
    position: relative;

    .download {
      display: none;

      img {
        margin-bottom: 10px;
      }

      position: absolute;
      top: 0;
      right: 93px;
      text-align: center;
      padding: 15px 15px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      width: 100px;
    }
  }

  .item:first-child:hover .download {
    display: block;
  }

  .item:hover {
    color: #ff6700;
  }
}
</style>
