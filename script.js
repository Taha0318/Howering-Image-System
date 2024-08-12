var elem = document.querySelectorAll(".elem");

elem.forEach(function(val) {
   val.addEventListener("mouseenter", function() {
      val.childNodes[3].style.opacity = 1;
   });
   val.addEventListener("mouseleave", function() {
      val.childNodes[3].style.opacity = 0;
   });
   val.addEventListener("mousemove", function(dets) {
    val.childNodes[3].style.position = "absolute";
    val.childNodes[3].style.left = dets.clientX - val.offsetLeft + "px";
    //  val.childNodes[3].style.top = dets.clientY - val.offsetTop + "px";
  });
});
