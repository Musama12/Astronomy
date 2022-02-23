gsap.registerPlugin(ScrollTrigger);


// creating timelines 
const heroAnim = gsap.timeline();
const sec2Anim = gsap.timeline();
const sec3Anim = gsap.timeline();
const sec4Anim = gsap.timeline();
const sec5Anim = gsap.timeline();
const sec6Anim = gsap.timeline();


// creaing aniamtion 

// heroAnim.to(heroHeading, {
//     duration: 1,
//     text: {
//         value: "Your new text",
//         newClass: "class2",
//         delimiter: ""
//     }
// });

heroAnim
        .from(".hero h1",{
            duration:2,
            scale:0,
            ease:"bounce",
            opacity:0,
        })

sec2Anim
        .from(".sec2 h3",{
            opacity:0,
            duration:.8,
            yPercent:-50
        })
        .from(".sec2 p",{
            opacity:0,
            duration:.8,
            y:20
        })
        .from(".sec2 span",{
            opacity:0,
            duration:.8,
        },'-=1')
sec3Anim
        .from(".sec3 h3",{
            opacity:0,
            duration:.8,
            yPercent:-50
        })
        .from(".sec3 p",{
            opacity:0,
            duration:.8,
            y:20
        })
        .from(".sec3 span",{
            opacity:0,
            duration:.8,
        },'-=1')
sec4Anim
        .from(".sec4 h3",{
            opacity:0,
            duration:.8,
            yPercent:-50
        })
        .from(".sec4 p",{
            opacity:0,
            duration:.8,
            y:20
        })
        .from(".sec4 span",{
            opacity:0,
            duration:.8,
        },'-=1')
sec5Anim
        .from(".sec5 h3",{
            opacity:0,
            duration:.8,
            yPercent:-50
        })
        .from(".sec5 p",{
            opacity:0,
            duration:.8,
            y:20
        })
sec6Anim
        .from(".sec6 h3",{
            opacity:0,
            duration:.8,
            yPercent:-50
        })
        .from(".sec6 p",{
            opacity:0,
            duration:.8,
            y:20
        })


// attaching to scroll 
ScrollTrigger.create({
    animation:sec2Anim,
    trigger:'.sec2',
    start:'top 80%',
    toggleActions:'restart none none reset',
})
ScrollTrigger.create({
    animation:sec3Anim,
    trigger:'.sec3',
    start:'top 80%',
    toggleActions:'restart none none reset',
})
ScrollTrigger.create({
    animation:sec4Anim,
    trigger:'.sec4',
    start:'top 80%',
    toggleActions:'restart none none reset',
})
ScrollTrigger.create({
    animation:sec5Anim,
    trigger:'.sec5',
    start:'top 80%',
    toggleActions:'restart none none reset',
})
ScrollTrigger.create({
    animation:sec6Anim,
    trigger:'.sec6',
    start:'top 80%',
    toggleActions:'restart none none reset',
})