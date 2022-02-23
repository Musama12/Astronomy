gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// navigation buttons 
const navBtn1 = document.querySelector("#sec2")
const navBtn2 = document.querySelector("#sec3")
const navBtn3 = document.querySelector("#sec4")
const navBtn5 = document.querySelector("#sec5")


// creating time lines 
const secNavi = gsap.timeline();
const heroAnim = gsap.timeline();
const sec2Anim = gsap.timeline();
const sec3Anim = gsap.timeline();
const sec4Anim = gsap.timeline();
const sec5Anim = gsap.timeline();



// secNavi
navBtn1.addEventListener("click",()=>{

    secNavi.to(window, .5, {
        ease:"none",
        scrollTo:{
        y:'.sec2',
        offsetY:400,
    },
   
    })
})


navBtn2.addEventListener("click",()=>{

    secNavi.to(window, .5,{
        ease:"none",
        scrollTo:{
        y:'.sec3',
        offsetY:400,
    }
    })
})
navBtn3.addEventListener("click",()=>{

    secNavi.to(window, .5,{
        ease:"none",
        scrollTo:{
        y:'.sec4',
        offsetY:400,
    }
    })
})
navBtn5.addEventListener("click",()=>{

    secNavi.to(window, .5,{
        ease:"none",
        scrollTo:{
        y:'.sec5',
        offsetY:400,
    }
    })
})


// making animation 
heroAnim
        .from(".hero h1",{
            yPercent:-100,
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
            yPercent:-100,
            duration:.8,
            opacity:0,
        })
        .from(".sec2 p",{
            yPercent:10,
            duration:.8,
            opacity:0,
        })
sec3Anim
        .from(".sec3 h1",{
            yPercent:-100,
            duration:.8,
            opacity:0,
        })
        .from(".sec3 p",{
            yPercent:10,
            duration:.8,
            opacity:0,
        })
sec4Anim
        .from(".sec4 h1",{
            yPercent:-100,
            duration:.8,
            opacity:0,
        })
        .from(".sec4 p",{
            yPercent:10,
            duration:.8,
            opacity:0,
        })
sec5Anim
        .from(".sec5 h1",{
            yPercent:-100,
            duration:.8,
            opacity:0,
        })
        .from(".sec5 p",{
            yPercent:10,
            duration:.8,
            opacity:0,
        })

// attaching to scroll 
ScrollTrigger.create({
    animation:sec2Anim,
    trigger:".sec2",
    start:"top 80%",
    toggleActions:"restart none none reset",
    end:"bottom bottom"
})
ScrollTrigger.create({
    animation:sec3Anim,
    trigger:".sec3",
    start:"top 80%",
    toggleActions:"restart none none reset",
    end:"bottom bottom"
})
ScrollTrigger.create({
    animation:sec4Anim,
    trigger:".sec4",
    start:"top 80%",
    toggleActions:"restart none none reset",
    end:"bottom bottom"
})
ScrollTrigger.create({
    animation:sec5Anim,
    trigger:".sec5",
    start:"top 80%",
    toggleActions:"restart none none reset",
    end:"bottom bottom"
})