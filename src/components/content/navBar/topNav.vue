<template>
  <div class="nav">
    <div class="topbar">
      <div class="container">
        <div class="topbar-lt">
          <ul>
            <li v-for="item in paraml" :key="item">
              <a :href="item.href">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="topbar-rt">
          <ul>
            <li v-for="item in paramr" :key="item">
              <a :href="item.href">{{ item.name }}</a>
            </li>
          </ul>
          <!-- 购物车 -->
          <div class="topbar-car">
            <a href="#">
              <i class="iconfont icon-cart"></i>
              购物车
              <span>(0)</span>
              <!-- 购物车菜单 -->
              <div class="cart-menu">
                <div class="message">购物车中还没有商品，赶紧选购吧！</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/iconfont.css'
export default {
  data() {
    return {
      paraml: [
        {
          name: "小米商城",
          href: "#",
        },
        {
          name: "MIUI",
          href: "#",
        },
        {
          name: "loT",
          href: "#",
        },
        {
          name: "云服务",
          href: "#",
        },
        {
          name: "天星数科",
          href: "#",
        },
        {
          name: "有品",
          href: "#",
        },
        {
          name: "小爱开放平台",
          href: "#",
        },
        {
          name: "企业团购",
          href: "#",
        },
        {
          name: "资质证照",
          href: "#",
        },
        {
          name: "协议规则",
          href: "#",
        },
        {
          name: "下载app",
          href: "#",
        },
        {
          name: "智能生活",
          href: "#",
        },
        {
          name: "SelectLocation",
          href: "#",
        },
      ],
      paramr: [
        {
          name: "登录",
          href: "#",
        },
        {
          name: "注册",
          href: "#",
        },
        {
          name: "消息通知",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.nav::after {
  position: absolute;
  content: "";
  background-color: #333333;
  height: 40px;
  width: 100%;
  left: 0;
  top: 0;
  z-index: -1;
}
.topbar {
  height: 40px;
  background-color: #333333;

  .container {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #b0b0b0;
    line-height: 40px;

    ul {
      li {
        float: left;
        text-align: center;

        a {
          display: inline-block;
          color: #b0b0b0;
        }

        a:hover {
          color: #fff;
        }

        span {
          margin: 0 5px;
        }
      }
    }

    // 左侧菜单导航
    .topbar-lt {
      flex: 5;

      // 下载app
      ul {
        display: flex;
        justify-content: space-between;
      }
      ul li:nth-last-child(3) {
        a {
          position: relative;

          .download {
            z-index: -1;
            transition: all 0.2s;
            position: absolute;
            top: -110px;
            left: 50%;
            transform: translate(-50%);
            width: 124px;
            background-color: #ffffff;
            box-sizing: border-box;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            padding: 15px 0;

            img {
              display: inline-block;
              width: 90px;
              height: 90px;
            }

            p {
              font-size: 15px;
              line-height: 15px;
              color: #000;
            }
          }

          &::before {
            content: "";
            width: 0;
            height: 0;
            border: 6px solid transparent;
            border-bottom: 6px solid #fefefe;
            display: none;
            position: absolute;
            top: 28px;
            left: 50%;
            transform: translate(-50%);
          }
        }

        a:hover .download {
          top: 40px;
        }

        a:hover {
          &::before {
            display: block;
          }
        }
      }
    }

    // 右侧菜单导航
    .topbar-rt {
      flex: 2;
      ul {
        margin-left: 66px;
        li {
          list-style: none;
          margin-right: 20px;
        }
      }

      // 购物车
      .topbar-car {
        flex: 1;
        float: right;
        text-align: center;
        width: 120px;
        height: 40px;
        background-color: #424242;

        a {
          width: 100%;
          height: 100%;
          color: #b0b0b0;

          // 购物车图标
          i {
            margin-right: 5px;
          }

          // 购物车菜单
          .cart-menu {
            z-index: -1;
            position: absolute;
            top: -59px;
            right: 167px;
            width: 316px;
            transition: all 0.2s;
            background-color: #fff;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

            .message {
              color: #000;
              line-height: 100px;
            }
          }
        }
      }

      .topbar-car:hover {
        background-color: #fff;

        .cart-menu {
          top: 40px;
        }

        a {
          color: red;
        }
      }
    }
  }
}
</style>
