gsap.registerPlugin('ScrollTrigger');

// making different timelines 
const sec2AStro = gsap.timeline({repeat:-1})
const sec2AStroPlanet = gsap.timeline({repeat:-1})
const sec2AStronout = gsap.timeline({repeat:-1})
const meteoroid1 = gsap.timeline({repeat:-1})
const meteoroid2 = gsap.timeline({repeat:-1})
const sec3FaceTl = gsap.timeline({repeat:-1})
const sec3ScreensTl = gsap.timeline({repeat:-1})
const sec4 = gsap.timeline({repeat:-1})

// sections content time lines 
const secContent2 = gsap.timeline();
const secContent3 = gsap.timeline();
const secContent4 = gsap.timeline();
const secContent5 = gsap.timeline();
const secContent6 = gsap.timeline();
const secContent7 = gsap.timeline();
const secContent8 = gsap.timeline();
const secContent9 = gsap.timeline();
const secContent10 = gsap.timeline();
const secContent11 = gsap.timeline();
const secContent12 = gsap.timeline();


// discribing some constants 
let duration = .8
let AnimationDelay = .5

// setting some properties to initial 
gsap.set('#astro-hand',{transformOrigin:'left'})
gsap.set('#torch',{transformOrigin:'right'})
gsap.set('#astro-flag',{transformOrigin:'left bottom'})
gsap.set('#astro-planet-ring',{transformOrigin:'center'})
gsap.set('#astro-planet',{transformOrigin:'center'})
gsap.set('#face',{transformOrigin:'center',repeat:-1,})

// animating 
sec2AStro.to('#astro-hand',{rotate:10,ease:'power0',duration:duration})
sec2AStro.to('#astro-hand',{rotate:0,ease:'power0', duration:duration})

sec2AStro.to('#astro-flag',{rotate:10,y:10,x:-10, delay:AnimationDelay, ease:'power0',duration:duration },'-=2')
sec2AStro.to('#astro-flag',{rotate:0,y:0, x:0,ease:'power0',duration:duration},'-=1')

sec2AStronout.to('#astronot',{y:-20,ease:'power0', duration:1.4})
sec2AStronout.to('#astronot',{y:0,ease:'power0', duration:1.4})

sec2AStroPlanet.to('#astro-planet-ring',{rotation:180,ease:'power0',duration:5})
sec2AStroPlanet.to('#astro-planet-ring',{rotation:360,ease:'power0',duration:5})
sec2AStroPlanet.to('#astro-planet',{rotation:-180,ease:'power0',duration:5},1)
sec2AStroPlanet.to('#astro-planet',{rotation:-360,ease:'power0',duration:5},1)

sec3ScreensTl.to('#screen-1',{y:-20,ease:'power0', duration:duration})
sec3ScreensTl.to('#screen-1',{y:0,ease:'power0', duration:duration})

sec3ScreensTl.to('#screen-2',{y:-20,ease:'power0',duration:duration },'-=2')
sec3ScreensTl.to('#screen-2',{y:0,ease:'power0',duration:duration },'-=1' )

sec3FaceTl.to('#face',{rotate:20 , ease:'power0', duration:duration,  delay:.6},)
sec3FaceTl.to('#face',{rotate:0,  ease:'power0',duration:duration, delay:.2},)

// section 4 svg animation 
sec4.to('#theoratical-sec4-home',{y:-20,ease:'power0', duration:duration, })
sec4.to('#theoratical-sec4-home',{y:0, ease:'power0',duration:duration, })

sec4.to('#marker',{y:8,ease:'power0', duration:duration, },'-=2')
sec4.to('#marker',{y:0,ease:'power0', duration:duration, },'-=1')

sec4.to('#small-planet',{y:10,ease:'power0', duration:duration, },'-=2')
sec4.to('#small-planet',{y:0,ease:'power0', duration:duration, },'-=1')

sec4.to('#lady',{y:10,ease:'power0', duration:duration, },'-=2')
sec4.to('#lady',{y:0,ease:'power0', duration:duration, },'-=1')

// meteoroid 2 animation 
meteoroid2.from('.meteor svg #meteoroid-2-4',{x:100 , y:-40, opacity:1, duration:duration ,ease:'power0', stagger:'-=1'})
meteoroid2.to('.meteor svg #meteoroid-2-4 ',{opacity:0, duration:duration ,ease:'power0', stagger:'-=1'})

meteoroid2.from('.meteor svg #meteoroid-2-3',{x:100 , y:-40, opacity:1, duration:duration ,ease:'power0', stagger:'-=1'},'.2')
meteoroid2.to('.meteor svg #meteoroid-2-3 ',{opacity:0, duration:duration ,ease:'power0', stagger:'-=1'},'.2')

meteoroid2.from('.meteor svg #meteoroid-2-2',{x:100 , y:-40, opacity:1, duration:duration ,ease:'power0', stagger:'-=1'},'.3')
meteoroid2.to('.meteor svg #meteoroid-2-2 ',{opacity:0, duration:duration ,ease:'power0', stagger:'-=1'},'.3')

meteoroid2.from('.meteor svg #meteoroid-2-1',{x:100 , y:-40, opacity:1, duration:duration ,ease:'power0', stagger:'-=1'},'.5')
meteoroid2.to('.meteor svg #meteoroid-2-1',{opacity:0, duration:duration ,ease:'power0', stagger:'-=1'},'.5')

// meteoroid 1 animation 
meteoroid1.from('.meteor svg #meteoroid-1-4',{x:100 , y:-40, opacity:1, duration:duration ,ease:'power0', stagger:'-=1'})
meteoroid1.to('.meteor svg #meteoroid-1-4 ',{opacity:0, duration:duration ,ease:'power0', stagger:'-=1'})

meteoroid1.from('.meteor svg #meteoroid-1-3',{x:100 , y:-40, opacity:1, duration:duration ,ease:'power0', stagger:'-=1'},'.2')
meteoroid1.to('.meteor svg #meteoroid-1-3 ',{opacity:0, duration:duration ,ease:'power0', stagger:'-=1'},'.2')

meteoroid1.from('.meteor svg #meteoroid-1-2',{x:100 , y:-40, opacity:1, duration:duration ,ease:'power0', stagger:'-=1'},'.1')
meteoroid1.to('.meteor svg #meteoroid-1-2 ',{opacity:0, duration:duration ,ease:'power0', stagger:'-=1'},'.1')

meteoroid1.from('.meteor svg #meteoroid-1-1',{x:100 , y:-40, opacity:1, duration:duration ,ease:'power0', stagger:'-=1'},'.3')
meteoroid1.to('.meteor svg #meteoroid-1-1',{opacity:0, duration:duration ,ease:'power0', stagger:'-=1'},'.3')


// content animating
secContent2
.from(".sec2__content h1,.sec2__content p",{
    xPercent:-200,
    duration:1,
    opacity:0
})
secContent3
.from(".sec3__content h1,.sec3__content p",{
    xPercent:-200,
    duration:1,
    opacity:0
})
secContent4
.from(".sec4__content h1,.sec4__content p",{
    xPercent:-200,
    duration:1,
    opacity:0
})

// planet section animation 
secContent5
.from(".sec5 h3,.sec5 p",{
    xPercent:-200,
    duration:1,
    opacity:0
})
.from(".sec5 a",{
    duration:.8,
    opacity:0
})
secContent6
.from(".sec6 h3,.sec6 p",{
    xPercent:-200,
    duration:1,
    opacity:0
})
.from(".sec6 a",{
    duration:.8,
    opacity:0
})
secContent7
.from(".sec7 h3,.sec7 p",{
    xPercent:-200,
    duration:1,
    opacity:0
})
.from(".sec7 a",{
    duration:.8,
    opacity:0
})
secContent8
.from(".sec8 h3,.sec8 p",{
    xPercent:-200,
    duration:1,
    opacity:0
})
.from(".sec8 a",{
    duration:.8,
    opacity:0
})
secContent9
.from(".sec9 h3,.sec9 p",{
    xPercent:-200,
    duration:1,
    opacity:0
})
.from(".sec9 a",{
    duration:.8,
    opacity:0
})
secContent10
.from(".sec10 h3,.sec10 p",{
    xPercent:-200,
    duration:1,
    opacity:0
})
.from(".sec10 a",{
    duration:.8,
    opacity:0
})
secContent11
.from(".sec11 h3,.sec11 p",{
    xPercent:-200,
    duration:1,
    opacity:0
})
.from(".sec11 a",{
    duration:.8,
    opacity:0
})
secContent12
.from(".sec12 h3,.sec12 p",{
    xPercent:-200,
    duration:1,
    opacity:0
})
.from(".sec12 a",{
    duration:.8,
    opacity:0
})

// attaching to scroll 
ScrollTrigger.create({
    animation:secContent2,
    trigger:'.sec2',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})

ScrollTrigger.create({
    animation:secContent3,
    trigger:'.sec3',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})
ScrollTrigger.create({
    animation:secContent4,
    trigger:'.sec4',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})


ScrollTrigger.create({
    animation:secContent5,
    trigger:'.sec5',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})
ScrollTrigger.create({
    animation:secContent6,
    trigger:'.sec6',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})
ScrollTrigger.create({
    animation:secContent7,
    trigger:'.sec7',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})
ScrollTrigger.create({
    animation:secContent8,
    trigger:'.sec8',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})
ScrollTrigger.create({
    animation:secContent9,
    trigger:'.sec9',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})
ScrollTrigger.create({
    animation:secContent10,
    trigger:'.sec10',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})
ScrollTrigger.create({
    animation:secContent11,
    trigger:'.sec11',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})
ScrollTrigger.create({
    animation:secContent12,
    trigger:'.sec12',
    start:'top bottom',
    
    toggleActions: 'restart none none reset',
})



