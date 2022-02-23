// registering plugin 
gsap.registerPlugin(ScrollTrigger)

// craeating timelines and animations 
let secContent2 = gsap.timeline()
gsap.to('.rotate-astro',{
    rotation:360,
    ease:'power0',
    repeat:-1,
    duration:20
})


secContent2
.from('.sec2__content',{
    xPercent:-50,
    opacity:0,
    duration:.8,
})
.from('.sec2__content h1',{
    duration:.8,
    yPercent:-50
})
.from('.sec2__content p',{
    opacity:0,
    duration:.8,
    yPercent:50
},'-=1')

let secContent3 = gsap.timeline()
secContent3
.from('.sec3__content',{
    xPercent:-50,
    opacity:0,
    duration:.8,
})
.from('.sec3__content h1',{
    duration:.8,
    yPercent:-50
})
.from('.secContent3 .rotate-astro',{
    duration:.8,
    opacity:0,
    yPercent:-20,
    xPercent:20
})
.from('.sec3__content p',{
    opacity:0,
    duration:.8,
    yPercent:50
},'-=1')

let secContent4 = gsap.timeline()
secContent4
.from('.sec4__content',{
    xPercent:-50,
    opacity:0,
    duration:.8,
})
.from('.sec4__content h1',{
    duration:.8,
    yPercent:-50
})
.from('.secContent4 .rotate-astro',{
    duration:.8,
    opacity:0,
    yPercent:-20,
    xPercent:20
})
.from('.sec4__content p',{
    opacity:0,
    duration:.8,
    yPercent:50
},'-=1')



let secContent5 = gsap.timeline()
secContent5
.from('.sec5__content',{
    xPercent:-50,
    opacity:0,
    duration:.8,
})

.from('.sec5__content h1',{
    duration:.8,
    yPercent:-50
})

.from('.secContent5 .rotate-astro',{
    duration:.8,
    opacity:0,
    yPercent:-20,
    xPercent:20
})

.from('.sec5__content p',{
    opacity:0,
    duration:.8,
    yPercent:50
},'-=1')

// attacing animations to scroll 
ScrollTrigger.create({
    animation:secContent2,
    trigger:'.secContent2',
    toggleActions: 'restart none none reverse',
    
   
    start: "top 80%",
    end:'center 30%'
})


ScrollTrigger.create({
    animation:secContent3,
    trigger:'.secContent3',
    toggleActions: 'restart none  none  reverse',
    
   
    start: "top 80%",
    end:'center 30%'
})


ScrollTrigger.create({
    animation:secContent4,
    trigger:'.secContent4',
    toggleActions: 'restart none  none  reverse',
    
   
    start: "top 80%",
    end:'center 30%'
})


ScrollTrigger.create({
    animation:secContent5,
    trigger:'.secContent5',
    toggleActions: 'restart none  none  reverse',
    
   
    start: "top 80%",
    end:'center 30%'
})


