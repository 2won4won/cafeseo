// var words = ['건강 쌍화탕','경동한의원 원장님의 비법 쌍화탕', '약재 넣어 다린 쌍화탕', '천궁,백작약,숙지황,황기,구기자 등 '],
var words = ['달지 않은 건강 쌍화탕','경동한의원 원장님의 비법 쌍화탕', '약재 넣어 다린 쌍화탕', '천궁,백작약,숙지황,황기, 구기자 등 '],
part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skip_count = 0,
skip_delay = 35,
speed = 90;
var wordflick = function () {
  setInterval(function () {
    
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};
$(document).ready(function () {
  wordflick();
});