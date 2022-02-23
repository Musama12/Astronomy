gsap.registerPlugin(ScrollTrigger)


// sets everything to initial 
gsap.set('.sec2__content h2,.sec3__content h2 ,.sec4__content h2',{
    opacity:0,
    duration:.8,
    y:50,
})
gsap.set('.sec2__content p,.sec4__content p',{
    duration:.8,
    opacity:0,
    x:-50,
})
// gsap.set('.sec3__content div',{
//     duration:.8,
//     opacity:0,
//     x:-100,
// })

// creating time line 
const heroAnim = gsap.timeline()
const sec2Anim = gsap.timeline()
const sec3Anim = gsap.timeline()
const sec4Anim = gsap.timeline()

gsap.set('.v,.s',{opacity:0})
heroAnim
.from('.hero__meteoroite',{
    delay:1,
    xPercent:100,
    duration:.8
})
.from('.hero__meteor',{
    delay:1,
    xPercent:-100,
    duration:.8
},'-=2')
.from('.slash',{
    scale:0,
    duration:.8
},)
.to('.v',{
    opacity:1,
    y:-10,
    duration:.8
},)
.to('.s',{
    opacity:1,
    y:10,
    duration:.8
},'-=1')




sec2Anim
.to('.sec2__content h2',{
    opacity:1,
    duration:.8,
    y:0,
})
.to('.sec2__content p',{
    duration:.8,
    opacity:1,
    x:0,
})

ScrollTrigger.create({
    animation:sec2Anim,
    trigger:'.sec2',
    toggleActions: 'restart none none reset',
    // markers:true,
    start:'top center',
    end:'bottom center'
})

sec3Anim
.to('.sec3__content h2',{
    opacity:1,
    duration:.8,
    y:0,
})


ScrollTrigger.create({
    animation:sec3Anim,
    trigger:'.sec3',
    toggleActions: 'restart none none reset',
    // markers:true,
    start:'top center',
    end:'bottom center'
})


sec4Anim
.to('.sec4__content h2',{
    opacity:1,
    duration:.8,
    y:0,
})
.to('.sec4__content p',{
    duration:.8,
    opacity:1,
    x:0,
})

ScrollTrigger.create({
    animation:sec4Anim,
    trigger:'.sec4',
    toggleActions: 'restart none none reset',
    // markers:true,
    start:'top center',
    end:'bottom center'
})

