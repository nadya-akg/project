//Плавная прокрутка до якоря
function scrollToHandler(elem){
  var pos = $("#" + elem).position().top;
  window.scrollTo({
      top: pos,
      left: 0,
      behavior: "smooth"
  });
}
document.addEventListener('click', () => scrollToHandler)
