import $ from 'jquery'
$(function () {
  $('.header-nav ul li').mouseover(function () {
      let index = $(this).index() - 1;
      $('.bottombar-tablist .item').eq(index).css('display', 'block').siblings().css('display', 'none')
  })
  $('.header-nav ul').hover(function () {
      $('.bottombar-tablist').stop().slideToggle()
  })
  $('.bottombar-tablist').hover(function () {
      $(this).stop().slideToggle()
  })

  $('.aside li').mouseover(function() {
      let index = $(this).index();
      $('.header-tab .item').eq(index).show().siblings().hide()
      $('.header-tab .item').mouseover(function() {
          $(this).show()
      })
      $('.header-tab .item').mouseout(function() {
          $(this).hide()
      })
  })
  $('.aside li').mouseout(function() {
      $('.header-tab .item').hide()
  })
  let boxTop = $('.back').offset().top
  console.log(boxTop);
  $(window).scroll(function() {
      if ($(document).scrollTop() >= boxTop) {
          $('.back').fadeIn();
      } else {
          $('.back').fadeOut();
      }
  })
  $('.back').click(function() {
      $('body,html').animate({scrollTop: 0})
  })
})