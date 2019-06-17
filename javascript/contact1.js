var contact = anime.timeline({
    easing: 'easeOutQuint',
    easing: 'spring(5, 50, 10, 0)',
    duration: 2000
})
contact.add({
    targets: 'section',
    scaleY: 2,
    translateX: '-20%',
    rotate: '45deg',
    duration: 3000,
    //autoplay: false,
})

contact.add({
    targets: 'section div',
    backgroundColor: 'rgb(72, 196, 103)',  
    delay: anime.stagger(100),   
},'-=5000') 

contact.add({
    targets: '#card-2',
    opacity: 1,
    duration: 1000,
},'-=6000') 

var rotateMe = anime({
    targets: 'section',
    rotate: '203deg',
    scaleY: 2,
    duration: 5000,
    autoplay: false,
})

document.querySelector('#send').addEventListener('click', () => {
    rotateMe.play();   
})





$( document ).ready(function() {
    console.log( "ready!" );

    $("#next").click(function(){
        $("#first").hide(1000);
        $("#next").hide(1000);
        $("#second").show(2000);
        $("#send").show(2000);
    });
    $("#send").click(function(){
        $("#second").hide(1000);
        $("#send").hide(1000);
        $("#third").show(2000);
    });



});