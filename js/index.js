// data
const heroSecData = {
    headline:'explore the universe',
    tagline:'unleash yourselves and discover the universe'
}

const astroSecData = {
    heading:`let's find out what is astronomy?`,
    discription:`Am increasing at contrasted in favourable he considered astonished. As if made held in an shot. By it enough to valley desire do. Mrs chief great maids these which are ham match she. Abode to tried do thing maids. Doubtful disposed returned rejoiced to dashwood is so up. 

    Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up he it enjoyment agreeable depending. Timed voice share led his widen noisy young. On weddings believed laughing although material do exercise of. Up attempt offered ye civilly so sitting to. She new course get living within elinor joy. She her rapturous suffering concealed. `
}

const obserAstroSecData = {
    heading:`what is observartional astronomy ? a type of astronomy`,
    discription:`Observational astronomy is a division of astronomy that is concerned with recording data about the observable universe, in contrast with theoretical astronomy, which is mainly concerned with calculating the measurable implications of physical models. It is the practice and study of observing celestial objects with the use of telescopes and other astronomical instruments.

    As a science, the study of astronomy is somewhat hindered in that direct experiments with the properties of the distant universe are not possible. However, this is partly compensated by the fact that astronomers have a vast number of visible examples of stellar phenomena that can be examined. This allows for observational data to be plotted on graphs, and general trends recorded. Nearby examples of specific phenomena, such as variable stars, can then be used to infer the behavior of more distant representatives. Those distant yardsticks can then be employed to measure other phenomena in that neighborhood, including the distance to a galaxy. `
}
const theoAstroSecData = {
    heading:`what is theoratical astronomy ? a type of astronomy`,
    discription:`Theoretical astronomy at its simplest is the definition of terms to be applied to astronomical effort and the phenomenological results. In essence it is the theory of the science of physical and logical laws with respect to any natural body in the sky especially at night.

    As many of the first terms a student encounters regarding natural bodies in the sky are at a secondary level, this learning resource starts there, proceeds through a university undergraduate level, dwells occasionally at the graduate or postgraduate level (often called postdoctoral) and ultimately focuses on the state of the art, the state of the science, and a bit beyond. Enjoy! `
}
let planetsData = {
    earth:{
        name:'earth',
        description:`Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth's surface.`,
        
    },
    mars:{
        name:'mars',
        description:`Mars is rocky with canyons, volcanoes and craters all over it. Red dust covers almost all of Mars. It has clouds and wind, just as Earth does. Sometimes the wind blows the red dust into a dust storm. Tiny dust storms can look like tornados, and large ones can cover the whole planet! Mars has about one-third the gravity of Earth. A rock dropped on Mars would fall slower than a rock dropped on Earth. Things weigh less on Mars than they weigh on Earth. A person who weighs 100 pounds on Earth would only weigh about 38 pounds on Mars because of less gravity.`,
    },
    Mercury:{
        name:'Mercury',
        description:`Mercury is the smallest planet in our solar system. ... Along with Venus, Earth, and Mars, Mercury is one of the rocky planets. It has a solid surface that is covered with craters. It has no atmosphere, and it doesn't have any moons.`,
    },
    Venus:{
        name:'Venus',
        description:`Venus is the second planet from the Sun, and is Earth's closest neighbor in the solar system. Venus is the brightest object in the sky after the Sun and the Moon, and sometimes looks like a bright star in the morning or evening sky. The planet is a little smaller than Earth, and is similar to Earth inside.
        `,
    },
    Saturn:{
        name:'Saturn',
        description:`Saturn is a gas giant made up mostly of hydrogen and helium. Saturn's volume is greater than 760 Earths, and it is the second most massive planet in the solar system, about 95 times Earth's mass. The Ringed Planet is the least dense of all the planets, and is the only one less dense than water.
        `,
    },
    Neptune:{
        name:'Neptune',
        description:`Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.

        `,
    },
    Jupiter:{
        name:'Jupiter',
        description:`Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. ... Surrounding Jupiter is a faint planetary ring system and a powerful magnetosphere.


        `,
    },
    Uranus:{
        name:'Uranus',
        description:`Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. ... Like Venus, Uranus rotates in the opposite direction as most other planets. And unlike any other planet, Uranus rotates on its side.
        `,
    },
}


const app = angular.module('app',[])
app.controller('controller',function($scope){
    $scope.heroSecData = heroSecData
    $scope.astroSecData = astroSecData
    $scope.obserAstroSecData = obserAstroSecData
    $scope.theoAstroSecData = theoAstroSecData
    $scope.planetsData = planetsData
})


