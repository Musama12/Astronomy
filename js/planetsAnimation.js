gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger)

// scale animation 
let planetDia = gsap.timeline()
let planetOrbRota = gsap.timeline()
let planetRevo = gsap.timeline()
let planetDist = gsap.timeline()

gsap.set('.scale-scale,.planet,.rotate-rotate',{transformOrigin:'center'})
gsap.set('#scale',{transformOrigin:'center'})
gsap.set('.planet-sec4',{
    transformOrigin:'50% 50%',
    xPercent:-50,
    yPercent:-50,
    motionPath:{
        path:'.earth-path',
        align:'.earth-path',
    }
})


// setting every thing to initial
gsap.set('.content-sec2,.content-sec3,.content-sec4,.content-sec5',{
    opacity:0,
    xPercent:-100,
})
gsap.set('.planet-sec2,.planet-sec3,.planet-sec4,.planet-sec5,.scale-scale-sec2,.scale-scale-sec3,.scale-scale-sec4,.scale-scale-sec5,#sun1,#sun2',{

     scale:0,
     duration:1
})
gsap.set('.value-sec2,.value-sec5,.value-sec4',{
    y:40,
    opacity:0,
     duration:.8
})
gsap.set('.value-sec3',{
    x:40,
    opacity:0,
     duration:.8
})


gsap.set('.value-dist',{
    transformOrigin:'50% 50%',
    xPercent:-50,
    yPercent:-300,
    motionPath:{
        path:'#value-sec7-path',
        align:'#value-sec7-path',
    }
})


planetDia
    .to('.content-sec2',{
        opacity:1,
        xPercent:0,
    })
    .to('.planet-sec2',{
  
        scale:1,
        duration:1
    })
    .to('.scale-scale-sec2',{
        scale:1,
        duration:1
    })
    .to('.value-sec2',{
        y:0,
        opacity:1,
         duration:.8
    })

planetOrbRota
            .to('.content-sec3',{
                opacity:1,
                xPercent:0,
            })
            .to('.planet-sec3',{
                scale:1,
                duration:1
            })
            .to('.rotate-rotate-sec3',{
                rotate:20
            })
            .to('.scale-scale-sec3',{
                scale:1,
                duration:1
            })
            .to('.value-sec3',{
                x:0,
                opacity:1,
                 duration:.8
            })
planetRevo
            .to('.content-sec4',{
                opacity:1,
                xPercent:0,
            })
            .to('.scale-scale-sec4',{
                scale:1,
                duration:1})
        
            .to('.planet-sec4',{
                scale:1,
                duration:1
            },.5)
            .to('#sun1',{
                scale:1,
                duration:1
            },'-=1')
            .to('.value-sec4',{
                y:40,opacity:1,
                 duration:.8
                })
            .to('.planet-sec4',{
                duration:30,
                ease:'power0',
                repeat:-1,
                motionPath:{
                    path:'.earth-path',
                    align:'.earth-path',
                }
                })
              
            // .to('.value-sec4',{y:0,
            //     opacity:1, 
            //     duration:.8
            // },'-=1')
            


planetDist
.to('.content-sec5',{
    opacity:1,
    xPercent:0,
})
    .to('.planet-sec5',{
        scale:1,
        duration:1
    })
    .to('#sun2',{
        scale:1,
        duration:1
    },'-=1')
    .to('.scale-scale-sec5',{
        scale:1,
        duration:1
    })
    .to('.value-sec5',{
        yPercent:-150,
        opacity:1,
         duration:.8
    })
        


    ScrollTrigger.create({
        animation:planetDia,
        trigger:'.sec2',
        toggleActions: 'restart none none none',
        start: "top 80%",
        end:'bottom 30%'
    })
    ScrollTrigger.create({
        animation:planetOrbRota,
        trigger:'.sec3',
        toggleActions: 'restart none none none',
        
        
        start: "top 80%",
        end:'bottom 30%'
    })
    ScrollTrigger.create({
        animation:planetRevo,
        trigger:'.sec4',
        toggleActions: 'restart none none none',
        
        
        start: "top 80%",
        end:'bottom 30%'
    })
    ScrollTrigger.create({
        animation:planetDist,
        trigger:'.sec5',
        toggleActions: 'restart none none none',
        
        
        start: "top 80%",
        end:'bottom 30%'
    })

    