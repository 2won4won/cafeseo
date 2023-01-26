$(function () {
  // anime.timeline({loop: true});
  var idx = 0;
  setInterval(time, 3000);
  function time() {
    var box = $('.look');
    box.removeClass('on');
    box.eq(idx).addClass('on');
    idx++;
    if (idx >= box.length) idx = 0;
  }
});