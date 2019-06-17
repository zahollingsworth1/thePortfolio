var rotate = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000
})
rotate.add({
    targets: 'section',
    scaleY: 2,
    translateX: '40%',
    rotate: '45deg',
    duration: 3000,
    
    //autoplay: false,
})
rotate.add({
    targets: 'section div',   
    backgroundColor: 'rgb(244, 80, 66)',
    delay: anime.stagger(100),   
}) 

   

rotate.add({
    targets: '#card-1',
    opacity: 1,
    top: '25%',
    duration: 1000 * 2,
},'-=3000')

