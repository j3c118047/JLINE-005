// Logo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 580) {
    document.getElementById("logo").style.fontSize = "3rem";
  } else {
    document.getElementById("logo").style.fontSize = "0";
  }
}
