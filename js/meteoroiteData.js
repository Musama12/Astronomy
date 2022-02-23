let hero = {
    meteorite:{
        heading:'Meteorites',
        desc1:'Meteoroids are what we call “space rocks” that range in size from dust grains to small asteroids. This term only applies when they’re in space.',
        desc2:'Most are pieces of other, larger bodies that have been broken or blasted off. Some come from comets, others from asteroids, and some even come from the Moon and other planets. Some meteoroids are rocky, while others are metallic, or combinations of rock and metal.',
    },
    meteor:{
        heading:'Meteors',
        desc1:'When meteoroids enter Earth’s atmosphere, or that of another planet, like Mars, at high speed and burn up, they’re called meteors. This is also when we refer to them as “shooting stars.” Sometimes meteors can even appear brighter than Venus -- that’s when we call them “fireballs.” Scientists estimate that about 48.5 tons (44,000 kilograms) of meteoritic material falls on Earth each day.',
        desc2:'When a meteoroid survives its trip through the atmosphere and hits the ground, it’s called a meteorite.',
    },
}
let sec2 = {
    heading:'meteor shower',
    desc1:'Several meteors per hour can usually be seen on any given night. When there are lots more meteors, you’re watching a meteor shower. Some meteor showers occur annually or at regular intervals as the Earth passes through the trail of dusty debris left by a comet (and, in a few cases, asteroids).',
    desc2:'Meteor showers are usually named after a star or constellation that is close to where the meteors appear to originate in the sky. Perhaps the most famous are the Perseids, which peak around August 12 every year. Every Perseid meteor is a tiny piece of the comet Swift-Tuttle, which swings by the Sun every 135 years. Other notable meteor showers include the Leonids, associated with comet Tempel-Tuttle; the Aquarids and Orionids, linked to comet Halley, and the Taurids, associated with comet Encke. Most of this comet debris is between the size of a grain of sand and a pea and burns up in the atmosphere before reaching the ground. Sometimes, meteor dust is captured by high-altitude aircraft and analyzed in NASA laboratories.'
}
let sec3 = {
    heading:'when to watch meteor shower in 2021',
    details:[
        {
            showerName:'Quadrantids',
            dateOfMaximum:'3-4 January',
            ratePerHour:'120',
            desc:`Blue meteors with fine trains`
        },
        {
            showerName:'Lyrids',
            dateOfMaximum:'22 April',
            ratePerHour:'18',
            desc:`Bright fast meteors, some with trains. Associated with Comet Thatcher`
        },
        {
            showerName:'Eta Aquariids',
            dateOfMaximum:'6 May',
            ratePerHour:'40',
            desc:`Low in sky. Associated with Comet Halley`
        },
        {
            showerName:'Delta Aquariids',
            dateOfMaximum:'30 July',
            ratePerHour:'<25',
            desc:`Steady stream of meteors over several days but a low rate per hour`
        },
        {
            showerName:'Alpha Capricornids',
            dateOfMaximum:'30 July',
            ratePerHour:'5',
            desc:`Yellow slow fireballs`
        },
        {
            showerName:'Draconids',
            dateOfMaximum:'8-9 October',
            ratePerHour:'Variable',
            desc:`Associated with Comet 21/P Giacobini-Zimmer`
        },
        {
            showerName:'Orionids',
            dateOfMaximum:'21 October',
            ratePerHour:'15',
            desc:`Fast with fine trains. Associated with Comet Halley`
        },
        {
            showerName:'Leonids',
            dateOfMaximum:'17-18 November',
            ratePerHour:'<15',
            desc:`Fast bright meteors with fine trains. Associated with Comet Tempel-Tuttle`
        },
        {
            showerName:'Geminids',
            dateOfMaximum:'14 December',
            ratePerHour:'120+',
            desc:`Plenty of bright meteors, few trains`
        },
        {
            showerName:'Ursids',
            dateOfMaximum:'22-23 December',
            ratePerHour:'<10',
            desc:`Sparse shower. Associated with comet 8P/Tuttle`
        },
    ]
}
let sec4 = {
    heading:'Why Do We Care About Meteorites?',
    desc:'Meteorites that fall to Earth represent some of the original, diverse materials that formed planets billions of years ago. By studying meteorites we can learn about early conditions and processes in the solar system’s history. These include the age and composition of different planetary building blocks, the temperatures achieved at the surfaces and interiors of asteroids, and the degree to which materials were shocked by impacts in the past.'
}

const app = angular.module('app',[])
app.controller('meteoroiteData',function ($scope) {
    $scope.hero = hero
    $scope.sec2 = sec2
    $scope.sec3 = sec3
    $scope.sec4 = sec4
    
})