$(function () {
    $(".l-header__sidebar__open").on("click", function () {        // js-btnクラスをクリックすると、
      $(".l-sidebar,.l-sidebar__main_bg").toggleClass("l-sidebar_open"); // メニューとバーガーの線にtoggleクラスをつけ外しする
      $('body').toggleClass('noneScroll')
    })
  });
 
  $(function () {
    $(".l-sidebar__close__btn").on("click", function () {        // js-btnクラスをクリックすると、
      $(".l-sidebar,.l-sidebar__main_bg").removeClass("l-sidebar_open"); 
      $('body').removeClass('noneScroll')
    })
  });

  $(function(){
    $(window).resize(function(e){
        var h = $(this).height();
        var w = $(this).width();
        $(".l-sidebar,.l-sidebar__main_bg").removeClass("l-sidebar_open"); // メニューとバーガーの線にtoggleクラスをつけ外しする
        $('body').removeClass('noneScroll')
    });
});