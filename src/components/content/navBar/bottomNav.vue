<template>
  <div class="bottombar">
    <!-- 顶部菜单 -->
    <div class="bottombar-header">
      <div class="container">
        <!-- logo -->
        <div class="header-logo">
          <a href="./index.html"> 小米官网 </a>
        </div>
        <!-- 菜单 -->
        <div class="header-nav">
          <ul>
            <li style="visibility: hidden">
              <a style="visibility: hidden" href="#">全部商品分类</a>
              <!-- 侧边栏 -->
              <ul style="visibility: visible" class="aside">
                <li>
                  <a href="#">
                    手机
                    <i class="iconfont icon-you-copy"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    电视
                    <i class="iconfont icon-you-copy"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    笔记本 平板
                    <i class="iconfont icon-you-copy"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    家电
                    <i class="iconfont icon-you-copy"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    出行 穿戴
                    <i class="iconfont icon-you-copy"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    电源 配件
                    <i class="iconfont icon-you-copy"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    健康 儿童
                    <i class="iconfont icon-you-copy"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    耳机 音箱
                    <i class="iconfont icon-you-copy"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    生活 箱包
                    <i class="iconfont icon-you-copy"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    家电
                    <i class="iconfont icon-you-copy"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li><a href="#">小米手机</a></li>
            <li><a href="#">Redmi 红米</a></li>
            <li><a href="#">电视</a></li>
            <li><a href="#">笔记本</a></li>
            <li><a href="#">平板</a></li>
            <li><a href="#">家电</a></li>
            <li><a href="#">路由器</a></li>
            <li><a href="#">智能硬件</a></li>
            <li><a class="close" href="#">服务</a></li>
            <li><a class="close" href="#">社区</a></li>
          </ul>
        </div>
        <!-- 搜索框 -->
        <div class="header-search">
          <input type="search" class="search" placeholder="电视" />
          <input type="submit" class="search-btn iconfont" value="&#xe6d0;" />
        </div>
      </div>
    </div>
    <div class="bottombar-tablist">
      <div class="container">
        <div class="item">
          <ul>
            <li>
              <div class="pic">
                <img src="~assets/img/mix4.png" alt="" />
              </div>
              <div class="text">
                <p class="title">Xiaomi MIX 4</p>
                <p class="price">4999元起</p>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="~assets/img/mix4.png" alt="" />
              </div>
              <div class="text">
                <p class="title">Xiaomi MIX 4</p>
                <p class="price">4999元起</p>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="~assets/img/mix4.png" alt="" />
              </div>
              <div class="text">
                <p class="title">Xiaomi MIX 4</p>
                <p class="price">4999元起</p>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="~assets/img/mix4.png" alt="" />
              </div>
              <div class="text">
                <p class="title">Xiaomi MIX 4</p>
                <p class="price">4999元起</p>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="~assets/img/mix4.png" alt="" />
              </div>
              <div class="text">
                <p class="title">Xiaomi MIX 4</p>
                <p class="price">4999元起</p>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="~assets/img/mix4.png" alt="" />
              </div>
              <div class="text">
                <p class="title">Xiaomi MIX 4</p>
                <p class="price">4999元起</p>
              </div>
            </li>
          </ul>
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
import "assets/js/slide";
export default {
  name: "bottomBar",
};
</script>

<style lang="less">
.bottombar {
  // 顶部菜单
  .bottombar-header {
    height: 100px;

    .container {
      display: flex;
      align-items: center;

      .header-logo {
        border-radius: 20px;
        width: 56px;
        height: 56px;
        font-size: 0;
        background-color: tomato;

        a {
          display: block;
          width: 100%;
          height: 100%;
        }

        a::before {
          content: "";
          display: block;
          height: 100%;
          background: url("~assets/img/logo.png") no-repeat 0 0;
          background-size: 56px;
        }
      }

      .header-nav {
        flex: 3;
        height: 100%;
        padding: 12px 0 0 30px;
        box-sizing: border-box;

        ul {
          height: 100%;

          li {
            float: left;
            padding: 0 10px;
            line-height: 76px;

            a:hover {
              color: #ff6700;
            }
          }

          // 侧边栏和tab栏
          li:first-child {
            position: relative;

            // 侧边栏
            .aside {
              box-sizing: border-box;
              padding: 20px 0;
              z-index: -2;
              position: absolute;
              left: -86px;
              top: 88px;
              width: 200px;
              height: 460px;
              background-color: rgba(0, 0, 0, 0.7);

              li {
                padding: 0;
                box-sizing: border-box;
                width: 100%;
                line-height: 42px;

                a {
                  box-sizing: border-box;
                  padding-left: 30px;
                  display: block;
                  width: 100%;
                  color: #fff;
                  height: 100%;

                  i {
                    float: right;
                    font-size: 12px;
                    margin-right: 20px;
                  }
                }
                a:hover {
                  background-color: #ff6700;
                }
              }
            }
          }
        }
      }

      .header-search {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;

        input {
          outline: none;
          border: none;
          height: 45px;
        }

        .search {
          border: 1px solid #ccc;
          width: 260px;
          border-right: none;
          text-indent: 10px;
        }

        .search-btn {
          border: 1px solid #ccc;
          background-color: #fff;
          width: 50px;
        }

        .search-btn:hover {
          background-color: #ff6700;
          color: #fff;
        }
      }
    }
  }

  // 底部tab列表
  .bottombar-tablist {
    display: none;
    border-top: 1px solid #ccc;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    height: 260px;
    background-color: #fff;

    .container {
      position: relative;
      padding-bottom: 15px;

      .item {
        position: absolute;
        padding: 30px 15px;
        left: 0;
        top: 0;
        right: 0;
        display: none;
        height: 100%;

        ul {
          li {
            float: left;
            width: 195px;

            .pic {
              border-right: 1px solid #ccc;
            }

            .text {
              margin-top: 20px;
              text-align: center;

              p {
                line-height: 25px;
              }

              .price {
                font-size: 14px;
                color: #ff6700;
              }
            }
          }

          li:last-child {
            .pic {
              border-right: none;
            }
          }
        }
      }
    }
  }
}
</style>
