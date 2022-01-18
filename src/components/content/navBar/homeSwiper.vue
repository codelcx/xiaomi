<template>
  <div class="homeswiper">
    <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{clickable:true}"
    :autoplay="{autoplay:true,reverseDirection:true,delay:5000}"
    >
      <swiper-slide><img src="~assets/img/swiper1.png" alt="" /></swiper-slide>
      <swiper-slide><img src="~assets/img/swiper1.png" alt="" /></swiper-slide>
      <swiper-slide><img src="~assets/img/swiper1.png" alt="" /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Navigation,Pagination,Scrollbar,Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css"
import "swiper/modules/pagination/pagination.min.css"
import "swiper/modules/scrollbar/scrollbar.min.css"
export default {
  name: "homeswiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(){
    return{
      modules:[Navigation,Pagination,Scrollbar,Autoplay]
    }
  }
};
</script>

<style lang="less" scoped>
.homeswiper img{
  height: 450px;
  z-index: 999;
}
:deep(.swiper-pagination-bullet-active){
  background-color: orange;
}
</style>
