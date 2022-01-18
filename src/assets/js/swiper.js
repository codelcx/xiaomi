import $ from 'jquery'
$(function () {
  changeImg(0)
  function changeImg(index) {
      $('.home-swiper li').eq(index).fadeIn(1500).siblings().fadeOut(1500)
      $('.focuList a').eq(index).addClass('current').siblings().removeClass('current')
  }
  // 左
  $('.lfbtn').click(function () {
      if (step > 0) {
          clearInterval(timer);
          step--;
          changeImg(step)
          autoplay()
      }
  })
  // 右
  $('.rgbtn').click(function () {
      if (step < 1) {
          clearInterval(timer);
          step++;
          changeImg(step)
          autoplay()
      }
  })
  // 小圆点
  $('.focuList a').click(function () {
      changeImg($(this).index())
  })
  // 自动播放
  let step = 0
  let timer = null
  function autoplay() {
      timer = setInterval(() => {
          step++;
          if (step === 2) {
              step = 0
          }
          changeImg(step)
      }, 5000);
  }
  // 鼠标移出停止
  $('.home-swiper').mouseover(function () {
      clearInterval(timer)
  })
  // 鼠标移出开始
  $('.home-swiper').mouseout(function () {
      autoplay()
  })
})