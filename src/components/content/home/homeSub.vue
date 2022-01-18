<template>
  <div class="home-sub">
    <div class="container">
      <div class="one">
        <div class="item">
          <i class="iconfont icon-baozhang"></i>
          <p>保障服务</p>
        </div>
        <div class="item">
          <i class="iconfont icon-baozhang"></i>
          <p>保障服务</p>
        </div>
        <div class="item">
          <i class="iconfont icon-baozhang"></i>
          <p>保障服务</p>
        </div>
        <div class="item">
          <i class="iconfont icon-baozhang"></i>
          <p>保障服务</p>
        </div>
        <div class="item">
          <i class="iconfont icon-baozhang"></i>
          <p>保障服务</p>
        </div>
        <div class="item">
          <i class="iconfont icon-baozhang"></i>
          <p>保障服务</p>
        </div>
      </div>
      <div class="img">
        <img src="~assets/img/img1.png" alt="" />
      </div>
      <div class="img">
        <img src="~assets/img/img1.png" alt="" />
      </div>
      <div class="img">
        <img src="~assets/img/img1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeSub",
};
</script>

<style lang="less">
.home-sub {
  position: absolute;
  top: 615px;
  height: 170px;
  width: 1200px;

  .container {
    display: flex;
    justify-content: space-between;

    .one {
      border-left: 1px solid #ccc;
      border-top: 1px solid #ccc;
      display: flex;
      flex-wrap: wrap;
      width: 210px;
      height: 100%;

      .item {
        flex-direction: column;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 70px;
        height: 85px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background-color: #5f5750;
        color: #fff4d2;

        i {
          margin-bottom: 5px;
        }
      }
    }

    .img {
      width: 316px;
      height: 100%;
    }
  }
}
</style>

