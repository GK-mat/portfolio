$(function() {
  /* header */

  var headNav = $("header");
  /* 初期表示、スクロール時にイベント開始 */
  $(window).on("load scroll", function () {
    /* スクロール位置の高さが200pxより大きい、かつis-fixedクラスがない場合 */
    if ($(this).scrollTop() > 500 && headNav.hasClass("is-fixed") == false) {
        headNav.css("display", "flex");
        headNav.css({ "top": "-72px" }); /* ヘッダーの高さ分マイナスにする */
        headNav.addClass("is-fixed");
        headNav.animate({ "top": 0 }, 600);
    }
    /* スクロール位置の高さが200pxより小さい、かつis-fixedクラスがある場合 */
    else if ($(this).scrollTop() < 500 && headNav.hasClass("is-fixed") == true) {
        headNav.removeClass("is-fixed");
        headNav.css("display", "none");
    }
  });

  $('.nav_img').on('click',function(){
    $('#resp_nav').toggleClass('close');
    $('#resp_nav').fadeToggle(500);
  });
  $('#resp_nav').on('click',function(){
    $('#resp_nav').toggleClass('close');
    $('#resp_nav').fadeToggle(500);
  });
  
  
})