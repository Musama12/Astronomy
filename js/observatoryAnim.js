gsap.registerPlugin(ScrollTrigger);

// time lines 
const heroAnim = gsap.timeline();
const sec2Anim = gsap.timeline();
const sec3Anim = gsap.timeline();
const sec4Anim = gsap.timeline();
const sec5Anim = gsap.timeline();
const sec6Anim = gsap.timeline();


// making animations 
heroAnim
        .from(".hero h1",{
            yPercent:-50,
            duration:.8,
            opacity:0,
        })
        .from(".hero p",{
            yPercent:10,
            duration:.8,
            opacity:0,
        })

sec2Anim
        .from(".sec2 h1",{
            yPercent:-50,
            duration:.8,
            opacity:0,
        })
        .from(".sec2 p",{
            yPercent:10,
            duration:.8,
            opacity:0,
        })
        .from(".sec2 figure",{
            yPercent:5,
            duration:.8,
            opacity:0,
        },'-=1')
sec3Anim
        .from(".sec3 h1",{
            yPercent:-50,
            duration:.8,
            opacity:0,
        })
        .from(".sec3 p",{
            yPercent:10,
            duration:.8,
            opacity:0,
        })
        .from(".sec3 figure",{
            yPercent:5,
            duration:.8,
            opacity:0,
        },'-=1')
sec4Anim
        .from(".sec4 h1",{
            yPercent:-50,
            duration:.8,
            opacity:0,
        })
        .from(".sec4 p",{
            yPercent:10,
            duration:.8,
            opacity:0,
        })
        .from(".sec4 figure",{
            yPercent:5,
            duration:.8,
            opacity:0,
        },'-=1')
sec5Anim
        .from(".sec5 h1",{
            yPercent:-50,
            duration:.8,
            opacity:0,
        })
        .from(".sec5 p",{
            yPercent:10,
            duration:.8,
            opacity:0,
        })
        .from(".sec5 figure",{
            yPercent:5,
            duration:.8,
            opacity:0,
        },'-=1')
sec6Anim
        .from(".sec6 h1",{
            yPercent:-50,
            duration:.8,
            opacity:0,
        })
        .from(".sec6 p",{
            yPercent:10,
            duration:.8,
            opacity:0,
        })
        .from(".sec6 figure",{
            yPercent:5,
            duration:.8,
            opacity:0,
        },'-=1')

ScrollTrigger.create({
    animation:sec2Anim,
    trigger:'.sec2',
    toggleActions:'restart none none reset',
    start:'top 80%',
    

})
ScrollTrigger.create({
    animation:sec3Anim,
    trigger:'.sec3',
    toggleActions:'restart none none reset',
    start:'top 80%',
    

})
ScrollTrigger.create({
    animation:sec4Anim,
    trigger:'.sec4',
    toggleActions:'restart none none reset',
    start:'top 80%',
    

})
ScrollTrigger.create({
    animation:sec5Anim,
    trigger:'.sec5',
    toggleActions:'restart none none reset',
    start:'top 80%',
    

})
ScrollTrigger.create({
    animation:sec6Anim,
    trigger:'.sec6',
    toggleActions:'restart none none reset',
    start:'top 80%',
    

})