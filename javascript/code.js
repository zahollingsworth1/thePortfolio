var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000
})
tl.add({
    targets: 'section div',
    width: '100%',
    backgroundColor: 'rgb(57, 78, 112)',
    delay: anime.stagger(100)
})
tl.add({
    targets: 'section div',
    rotate: '20deg',
    width: "95%",
    backgroundColor: 'rgb(93, 109, 135)',
    opacity: .7,
    delay: anime.stagger(100)
})
tl.add({
    targets: 'h1',
    top: '20%',
    opacity: 1,
    duration: 4000
}, '-=1600')
tl.add({
    targets: 'p, .fabs',
    opacity: 1,
    duration: 500
},'-=3000')

var rotateMe = anime({
    targets: 'section',
    scaleY: 2,
    scaleY: 2,
    translateX: '40%',
    rotate: '45deg',
    duration: 5000,
    autoplay: false,
})

var spinIt = anime({
    targets: 'section',
    translateX: '-40%',
    rotate: '45deg',
    duration: 5000,
    autoplay: false,

})

 
//document.querySelector('#portfolio').addEventListener('click', () => {
//    rotateMe.play();
//    
//})

//document.querySelector('#about').addEventListener('click', () => {
//    rotateMe.reverse();
//    rotateMe.play();
//})
//
//document.querySelector('#contact').addEventListener('click', () => {
//    spinIt.play();
//})
//---------------------------------------------------------------


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "inline") {
      content.style.display = "none";
    } else {
      content.style.display = "inline";
      content.style.float = "right";
    }
  });
}
//------------------------------------------------------------
//$( document ).ready(function() {
//    console.log( "ready!" );
//
//    $("#portfolio").click(function(){
//        $("#p").hide(1000);
//        $("#title").hide(1000);
//        $("#card-1").show(2000);
//        
//
//    });
//
//});




//var typed = new Typed('.typing', {
//  strings: [ "Let's Begin Coding..."],
//  typeSpeed: 30,
//  loop: false,
//});

