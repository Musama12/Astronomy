// data
// planets data
let planetsData = {
    earth:{
        name:'earth',
        description:`Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth's surface.`,
        sec2Heading:'5 facts about earth that will blow your mind.',

        sec4Heading:'diameter of earth.',
        diaOfEarthVal:'12,742km',
        diaOfEarthdesc:`The diameter of a circle is twice the radius, giving us a diameter for Earth of 12,756 km. The Earth is almost, but not quite, a perfect sphere. Its equatorial radius is 6378 km, but its polar radius is 6357 km - in other words, the Earth is slightly flattened. Eratosthenes was measuring the polar radius, and his value (using the 0.15 km/stadium conversion) lies between the polar and equatorial values.`,

        sec5Heading:'earth rotation time.',
        orbitTimeOfEarthVal:'23h 56m 4s',
        orbitTimeOfEarthdesc:`Earth rotates once in about 24 hours with respect to the Sun, but once every 23 hours, 56 minutes, and 4 seconds with respect to other. Earth's rotation is slowing slightly with time; thus, a day was shorter in the past. This is due to the tidal effects the Moon has on Earth's rotation. Scientists reported that in 2020 Earth has started spinning faster, after consistently slowing down in the decades before. Because of that, engineers worldwide are discussing a 'negative leap second' and other possible timekeeping measures..`,

        sec6Heading:'revolution time around the sun.',
        revolOfEarthVal:`365 days`,
        revolOfEarthdesc:`The gravitational pull of the Sun keeps Earth and the other planets in orbit around the star. Like the other planets, Earth’s orbital path is an ellipse so the planet is sometimes farther away from the Sun than at other times. The closest Earth gets to the Sun each year is at perihelion (147 million km) on about January 3rd and the furthest is at aphelion (152 million km) on July 4th.Earth revolves around the Sun at an average speed of about 27 km (17 mi) per second, but the speed is not constant. The planet moves slower when it is at aphelion and faster when it is at perihelion.The reason the Earth (or any planet) has seasons is that Earth is tilted 23 1/2oon its axis. `,
        
        sec7Heading:'distance of earth from the sun.',
        distOfEarthVal:'0.983-1.017 AU',
        distOfEarthdesc:`Earth’s orbit around the sun isn’t a perfect circle. So Earth’s distance from the sun changes throughout the year.when the Earth is at perihelion – its nearest point to the sun for the year, in January – it’s about 0.983 AU from the sun. When our planet swings out to aphelion – its farthest point, in July – we’re about 1.017 AU away from the sun. `,
    },
    Mercury:{
        name:'Mercury',
        description:`Mercury is the smallest planet in our solar system. ... Along with Venus, Earth, and Mars, Mercury is one of the rocky planets. It has a solid surface that is covered with craters. It has no atmosphere, and it doesn't have any moons.`,
        sec4Heading:'diameter of MERCURY.',
         diaOfEarthVal:'4,878km',
         diaOfEarthdesc:`Mercury is the smallest planet (except for the dwarf planets), having a diameter of 4878 kilometers, less than half that of Earth. Mercury's density is 5.4 g/cm3, much greater than the density of the Moon, indicating that the composition of those two objects differs substantially.`,

        sec5Heading:'MERCURY rotation time.',
         orbitTimeOfEarthVal:'58d 15h 30m',
        orbitTimeOfEarthdesc:`Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. The time of rotation of mercury is 58.646 days and its velocity of rotation is 10.892 km/h (3.026 m/s).`,

        sec6Heading:'revolution time around the sun.',
         revolOfEarthVal:`88 days`,
        revolOfEarthdesc:`Mercury rotates in a way that is unique in the Solar System. It is tidally locked with the Sun in a 3:2 spin–orbit resonance, meaning that relative to the fixed stars, it rotates on its axis exactly three times for every two revolutions it makes around the Sun. `,
        
        sec7Heading:'distance of MERCURY from the sun.',
        distOfEarthVal:'0.4 AU',
        distOfEarthdesc:`Average distance of 36 million miles (58 million kilometers), Mercury is 0.4 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 3.2 minutes to travel from the Sun to Mercury`,
    },
    Venus:{
        name:'Venus',
        description:`Venus is the second planet from the Sun, and is Earth's closest neighbor in the solar system. Venus is the brightest object in the sky after the Sun and the Moon, and sometimes looks like a bright star in the morning or evening sky. The planet is a little smaller than Earth, and is similar to Earth inside.
        `,
      

        sec4Heading:'diameter of Venus.',
         diaOfEarthVal:'638.4km',
         diaOfEarthdesc:`The diameter of Venus is 12,103.6 km (7,520.8 mi)—only 638.4 km (396.7 mi) less than Earth's—and its mass is 81.5% of Earth's. Conditions on the Venusian surface differ radically from those on Earth because its dense atmosphere is 96.5% carbon dioxide, with most of the remaining 3.5% being nitrogen.
        `,

        sec5Heading:'Venus rotation time.',
         orbitTimeOfEarthVal:'243d',
        orbitTimeOfEarthdesc:`It completes one rotation in 243 Earth days — the longest day of any planet in our solar system, even longer than a whole year on Venus. But the Sun doesn't rise and set each "day" on Venus like it does on most other planets.
        `,

        sec6Heading:'revolution time around the sun.',
         revolOfEarthVal:`225 days`,
        revolOfEarthdesc:`Venus travels around the sun once every 225 Earth days but it rotates clockwise once every 243 days. This peculiar combination gives it a day with respect to the sun of 117 Earth days. Uranus is tilted on its side about 90° so its direction of rotation is ambiguous.
        `,
        
        sec7Heading:'distance of Venus from the sun.',
        distOfEarthVal:'0.7 AU',
        distOfEarthdesc:`From an average distance of 67 million miles (108 million kilometers), Venus is 0.7 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. It takes sunlight 6 minutes to travel from the Sun to Venus.From an average distance of 67 million miles (108 million kilometers), Venus is 0.7 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. It takes sunlight 6 minutes to travel from the Sun to Venus.`,
    },
    Saturn:{
        name:'Saturn',
        description:`Saturn is a gas giant made up mostly of hydrogen and helium. Saturn's volume is greater than 760 Earths, and it is the second most massive planet in the solar system, about 95 times Earth's mass. The Ringed Planet is the least dense of all the planets, and is the only one less dense than water.

        `,
   

        sec4Heading:'diameter of Saturn.',
         diaOfEarthVal:'120,536km',
         diaOfEarthdesc:`By this measure, Saturn's equatorial diameter is 120,536 km (74,898 miles). In comparison, its polar diameter is only 108,728 km (67,560 miles), or 10 percent smaller, which makes Saturn the most oblate (flattened at the poles) of all the planets in the solar system.
        `,

        sec5Heading:'Saturn rotation time.',
         orbitTimeOfEarthVal:'10.7h',
        orbitTimeOfEarthdesc:`One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days). ... This means that, like Earth, Saturn experiences seasons.
        `,

        sec6Heading:'revolution time around the sun.',
         revolOfEarthVal:`29.4 Y`,
        revolOfEarthdesc:`Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days).
        `,
        
        sec7Heading:'distance of Saturn from the sun.',
        distOfEarthVal:'9.5 AU',
        distOfEarthdesc:`From an average distance of 886 million miles (1.4 billion kilometers), Saturn is 9.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 80 minutes to travel from the Sun to Saturn.`,
    },
    Uranus:{
        name:'Uranus',
        description:`Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. ... Like Venus, Uranus rotates in the opposite direction as most other planets. And unlike any other planet, Uranus rotates on its side.

        `,      

        sec4Heading:'diameter of Uranus.',
         diaOfEarthVal:'50,724km',
         diaOfEarthdesc:`With a radius of 15,759.2 miles (25,362 kilometers), Uranus is 4 times wider than Earth. If Earth was the size of a nickel, Uranus would be about as big as a softball.
        `,

        sec5Heading:'Uranus rotation time.',
         orbitTimeOfEarthVal:'17h',
        orbitTimeOfEarthdesc:`One day on Uranus takes about 17 hours (the time it takes for Uranus to rotate or spin once). And Uranus makes a complete orbit around the Sun (a year in Uranian time) in about 84 Earth years (30,687 Earth days).
        `,

        sec6Heading:'revolution time around the sun.',
         revolOfEarthVal:`84 Y`,
        revolOfEarthdesc:`Uranus is the only planet whose equator is nearly at a right angle to its orbit, with a tilt of 97.77 degrees—possibly the result of a collision with an Earth-sized object long ago. This unique tilt causes the most extreme seasons in the solar system. For nearly a quarter of each Uranian year, the Sun shines directly over each pole, plunging the other half of the planet into a 21-year-long, dark winter.
        `,
        
        sec7Heading:'distance of Uranus from the sun.',
        distOfEarthVal:'19.8 AU',
        distOfEarthdesc:`From an average distance of 1.8 billion miles (2.9 billion kilometers), Uranus is 19.8 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 2 hours and 40 minutes to travel from the Sun to Uranus.`,
    },
    Jupiter:{
        name:'Jupiter',
        description:`Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. ... Surrounding Jupiter is a faint planetary ring system and a powerful magnetosphere.

        `,
     

        sec4Heading:'diameter of Jupiter.',
         diaOfEarthVal:'69,911km',
         diaOfEarthdesc:`Jupiter has a mean radius of 43,440.7 miles (69,911 kilometers), about a tenth that of the sun. However, its rapid rotation — it spins once every 9.8 hours — causes it to bulge at the equator, where the diameter is 88,846 miles (142,984 km). In contrast, the diameter at the poles is only 83,082 miles (133,708 km).
        `,

        sec5Heading:'Jupiter rotation time.',
         orbitTimeOfEarthVal:'12h',
        orbitTimeOfEarthdesc:`One day on Jupiter takes only about 10 hours (the time it takes for Jupiter to rotate or spin around once), and Jupiter makes a complete orbit around the Sun (a year in Jovian time) in about 12 Earth years (4,333 Earth days).
        `,

        sec6Heading:'revolution time around the sun.',
         revolOfEarthVal:`12 Y`,
        revolOfEarthdesc:`Its equator is tilted with respect to its orbital path around the Sun by just 3 degrees. This means Jupiter spins nearly upright and does not have seasons as extreme as other planets do.
        `,
        
        sec7Heading:'distance of Jupiter from the sun.',
        distOfEarthVal:'5.2 AU',
        distOfEarthdesc:`From an average distance of 484 million miles (778 million kilometers), Jupiter is 5.2 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes Sunlight 43 minutes to travel from the Sun to Jupiter.`,
    },
    Neptune:{
        name:'Neptune',
        description:`Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.

        `,
     


        sec4Heading:'diameter of Neptune.',
         diaOfEarthVal:' 49,528km',
         diaOfEarthdesc:`Neptune's equatorial diameter measured at the one-bar pressure level (the pressure of Earth's atmosphere at sea level) is 49,528 km (30,775 miles), which is only about 3 percent shy of the diameter of Uranus.
        `,

        sec5Heading:'Neptune rotation time.',
         orbitTimeOfEarthVal:'16h',
        orbitTimeOfEarthdesc:`One day on Neptune takes about 16 hours (the time it takes for Neptune to rotate or spin once). And Neptune makes a complete orbit around the Sun (a year in Neptunian time) in about 165 Earth years (60,190 Earth days).
        `,

        sec6Heading:'revolution time around the sun.',
         revolOfEarthVal:`165 Y`,
        revolOfEarthdesc:`Sometimes Neptune is even farther from the Sun than dwarf planet Pluto. Pluto's highly eccentric, oval-shaped orbit brings it inside Neptune's orbit for a 20-year period every 248 Earth years. This switch, in which Pluto is closer to the Sun than Neptune, happened most recently from 1979 to 1999. Pluto can never crash into Neptune, though, because for every three laps Neptune takes around the Sun, Pluto makes two. This repeating pattern prevents close approaches of the two bodies.
        `,
        
        sec7Heading:'distance of Neptune from the sun.',
        distOfEarthVal:'30 AU',
        distOfEarthdesc:`From an average distance of 2.8 billion miles (4.5 billion kilometers), Neptune is 30 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 4 hours to travel from the Sun to Neptune.`,
    },
    mars:{
        name:'mars',
        description:`Mars is rocky with canyons, volcanoes and craters all over it. Red dust covers almost all of Mars. It has clouds and wind, just as Earth does. Sometimes the wind blows the red dust into a dust storm. Tiny dust storms can look like tornados, and large ones can cover the whole planet! Mars has about one-third the gravity of Earth. A rock dropped on Mars would fall slower than a rock dropped on Earth. Things weigh less on Mars than they weigh on Earth. A person who weighs 100 pounds on Earth would only weigh about 38 pounds on Mars because of less gravity.`,
        sec2Heading:'5 facts about earth that will blow your mind.',
        factsHeading:[
            `Earth's Core Is as Hot as the Sun's Surface.`,
            
            `The Earth was once believed to be the centre of the universe.`,
            
            `The Earth is the densest planet in the Solar System.`,
            
            ` Earth is Almost a Sphere.`,
            
            `70% of the Earth’s Surface is Covered in Water.`
        ],
        factsDescription:[
            `"Within uncertainty, the temperature at the center of the Earth is the same as the temperature at the surface of the sun (5800 K)," Caltech geochemist Paul Asimow tells Popular Mechanics. At about almost 10,000 degrees Fahrenheit, that's hot.`,

            `Due to the apparent movements of the Sun and planets in relation to their viewpoint, ancient scientists insisted that the Earth remained static, whilst other celestial bodies travelled in circular orbits around it. Eventually, the view that the Sun was at the centre of the universe was postulated by Copernicus, though this is also not the case.`,

            `This varies according to the part of the planet; for example, the metallic core is denser than the crust. The average density of the Earth is approximately 5.52 grams per cubic centimetre.`,

            `Many people tend to think that the Earth is a sphere. In fact, between the 6th cenury BCE and the modern era, this remained the scientific consensus. But thanks to modern astronomy and space travel, scientists have since come to understand that the Earth is actually shaped like a flattened sphere (aka. an oblate spheroid).`,

            `When astronauts first went into the space, they looked back at the Earth with human eyes for the first time. Based on their observations, the Earth acquired the nickname the “Blue Planet:. And it’s no surprise, seeing as how 70% of our planet is covered with oceans. The remaining 30% is the solid crust that is located above sea level, hence why it is called the “continental crust”.`
        ],


        sec4Heading:'diameter of mars.',
        diaOfEarthVal:'6,779 km',
        diaOfEarthdesc:`Mars (diameter 6790 kilometers) is only slightly more than half the size of Earth (diameter 12750 kilometers). Note the difference in color between the two planets. Almost 70% of Earth's surface is covered by liquid water. In contrast, Mars now has no liquid water on its surface and is covered with bare rock and dust.`,

        sec5Heading:'mars rotation time.',
        orbitTimeOfEarthVal:'24.6h',
        orbitTimeOfEarthdesc:`Mars rotates on its axis every 24.6 Earth hours, defining the length of a Martian day, which is called a sol (short for “solar day”). Mars's axis of rotation is tilted 25.2 degrees relative to the plane of the planet's orbit around the sun, which helps give Mars seasons similar to those on Earth.`,

        sec6Heading:'revolution time around the sun.',
        revolOfEarthVal:`1.88 years`,
        revolOfEarthdesc:`The axis of Mars is tilted at 25 degrees and 12 minutes relative to its orbital plane about the Sun. This produces seasons on the surface of Mars, similar to the seasons on Earth. Mars completes one orbital revolution around the Sun every 1.88 Earth years. Two small natural satellites, Demos and Phobos, orbit Mars. `,
        
        sec7Heading:'distance of mars from the sun.',
        distOfEarthVal:'1.5 AU',
        distOfEarthdesc:`From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth.`,
    }
}


const app = angular.module('app',[])
app.controller('planet',function($scope){
    $scope.planetsData = planetsData
})