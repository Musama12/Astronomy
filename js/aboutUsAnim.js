// reistering plugins 
gsap.registerPlugin(ScrollTrigger);

// setting some values to initial 
gsap.set(".girl-sitting",{
    x:"100%",
    y:"-60%",
})
gsap.set(".hero img",{
    transformOrigin:"center center"
})




// time lines 
const heroAnim = gsap.timeline()
const sec2GirlAnim = gsap.timeline();
const sec2Anim = gsap.timeline()
const sec3Anim = gsap.timeline()

// Animation 
heroAnim
        .from(".hero img",{
            opacity:0,
            scale:.7,
            duration:.8,
            delay:.6
        })
        .from(".hero h1",{
            opacity:0,
            y:-10,
            duration:.8,
        },"-=1")
        .from(".hero p",{
            opacity:0,
            y:-10,
            duration:.8,
        })

sec2GirlAnim
            .from('.girl-sitting',{
                opacity:0,
                delay:.8,
                duration:.8,
                y:-120,
            })
            .from('.girl-sitting',{
                rotateX:6,
            
                duration:1.5,
                repeat:-1,
                yoyo:true,
                delay:.8,
                ease:"none"
            })

sec2Anim
        .from(".girl-sitting-path",{
            // transformOrigin:"left",
            duration:.8,
            x:"-100%"
        })
        .from(".sec2 .sec2__heading",{
            yPercent:-20,
            duration:.8,
            opacity:0,
        })

sec3Anim
        .from(".team",{
            duration:.8,
            opacity:0,
            y:20,
            stagger:.3
        })

// attaching to scroll 

ScrollTrigger.create({
                animation:sec3Anim,
                trigger:".sec3",
                start:"top bottom",
                toggleActions:"restart none none reset"
            })
ScrollTrigger.create({
                animation:sec2Anim,
                trigger:".sec2",
                start:"top bottom",
                toggleActions:"restart none none reset"
            })