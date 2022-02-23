gsap.registerPlugin(ScrollTrigger);

// making time lines 
const heroAnim = gsap.timeline();
const sec2Anim = gsap.timeline();
const sec3Anim = gsap.timeline();
const sec4Anim = gsap.timeline();
const sec5Anim = gsap.timeline();
const sec6Anim = gsap.timeline();
const sec7Anim = gsap.timeline();
const sec8Anim = gsap.timeline();
const sec9Anim = gsap.timeline();
const sec10Anim = gsap.timeline();
const sec11Anim = gsap.timeline();
const sec12Anim = gsap.timeline();
const sec13Anim = gsap.timeline();
const sec14Anim = gsap.timeline();

// setting some styles 
// gsap.set(".sec4 .svg  svg .star-ball",{
//     transformOrigin:"center center",
// })

// animating sections 
heroAnim
        .from(".hero__sec h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".hero__sec p",{
            y:-30,
            duration:1,
            opacity:0,
        })

sec2Anim
        .from(".sec2 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec2 p",{
            y:-30,
            duration:1,
            opacity:0,
        })

sec3Anim
        .from(".sec3 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec3 p",{
            y:-30,
            duration:1,
            opacity:0,
        })
        .from(".constImgBx img",{
            duration:1,
            scale:0,
            stagger:.3,
            ease:Bounce.easeOut,
        },'-=2')


// constellations section animations 
sec4Anim
        .from(".sec4 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec4 .sec4__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2

        })
        .from(".sec4 .sec4__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })




sec5Anim
        .from(".sec5 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec5 .sec5__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2
        })
        .from(".sec5 .sec5__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })

        
sec6Anim
        .from(".sec6 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec6 .sec6__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2
        })
        .from(".sec6 .sec6__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })

sec7Anim
        .from(".sec7 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec7 .sec7__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2

        })
        .from(".sec7 .sec7__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })

        
sec8Anim
        .from(".sec8 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec8 .sec8__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2

        })
        .from(".sec8 .sec8__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })
sec9Anim
        .from(".sec9 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec9 .sec9__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2

        })
        .from(".sec9 .sec9__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })
sec10Anim
        .from(".sec10 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec10 .sec10__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2

        })
        .from(".sec10 .sec10__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })
sec11Anim
        .from(".sec11 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec11 .sec11__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2

        })
        .from(".sec11 .sec11__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })
sec12Anim
        .from(".sec12 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec12 .sec12__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2

        })
        .from(".sec12 .sec12__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })
sec13Anim
        .from(".sec13 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec13 .sec13__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2

        })
        .from(".sec13 .sec13__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })
sec14Anim
        .from(".sec14 h1",{
            yPercent:50,
            duration:1,
            opacity:0,
        })
        .from(".sec14 .sec14__stats p",{
            duration:.3,
            opacity:0,
            stagger:.2

        })
        .from(".sec14 .sec14__desc",{
            y:-30,
            duration:1,
            opacity:0,
        })


// binding animations with scroll trigger 

ScrollTrigger.create({
    animation:sec2Anim,
    trigger:'.sec2',
    toggleActions:"restart none none reset",
    start:'top 70%',
})

ScrollTrigger.create({
    animation:sec3Anim,
    trigger:'.sec3',
    toggleActions:"restart none none reset",
    start:'top 70%',
})


// constalletion section 
ScrollTrigger.create({
    animation:sec4Anim,
    trigger:'.sec4',
    toggleActions:"restart none none reset",
    start:'top 70%',
})
ScrollTrigger.create({
    animation:sec5Anim,
    trigger:'.sec5',
    toggleActions:"restart none none reset",
    start:'top 70%',
})
ScrollTrigger.create({
    animation:sec6Anim,
    trigger:'.sec6',
    toggleActions:"restart none none reset",
    start:'top 70%',
})
ScrollTrigger.create({
    animation:sec7Anim,
    trigger:'.sec7',
    toggleActions:"restart none none reset",
    start:'top 70%',
})
ScrollTrigger.create({
    animation:sec8Anim,
    trigger:'.sec8',
    toggleActions:"restart none none reset",
    start:'top 70%',
})
ScrollTrigger.create({
    animation:sec9Anim,
    trigger:'.sec9',
    toggleActions:"restart none none reset",
    start:'top 70%',
})
ScrollTrigger.create({
    animation:sec10Anim,
    trigger:'.sec10',
    toggleActions:"restart none none reset",
    start:'top 70%',
})
ScrollTrigger.create({
    animation:sec11Anim,
    trigger:'.sec11',
    toggleActions:"restart none none reset",
    start:'top 70%',
})
ScrollTrigger.create({
    animation:sec12Anim,
    trigger:'.sec12',
    toggleActions:"restart none none reset",
    start:'top 70%',
})
ScrollTrigger.create({
    animation:sec13Anim,
    trigger:'.sec13',
    toggleActions:"restart none none reset",
    start:'top 70%',
})
ScrollTrigger.create({
    animation:sec14Anim,
    trigger:'.sec14',
    toggleActions:"restart none none reset",
    start:'top 70%',
})

