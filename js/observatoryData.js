let Data = {
    hero:{
        heading:`The 5 Best Astronomical Observatories Around The World`,
        desc:`Although planets surround stars in the galaxy, how they form remains a subject of debate. Despite the wealth of worlds in our own solar system, scientists still aren't certain how planets are built. Currently, two theories are duking it out for the role of champion. 
        The first and most widely accepted theory, core accretion, works well with the formation of the terrestrial planets like Earth but has problems with giant planets. The second, the disk instability method, may account for the creation of these giant planets. 
        Scientists are continuing to study planets in and out of the solar system in an effort to better understand which of these methods is most accurate.`,
    },
    sec2:{
        heading:`Paranal Observatory, Chile`,
        desc:`This observatory is located in Chile which is considered as a major hotspot for science. Chile already has a number of observatories and this happens to be the most popular among them. The Paranal Observatory is operated by the European Southern Observatory and is made open to the weekend visitors who come to see the Very Large telescope here. The VLT comprises of four small telescopes namely, Kueyen, Antu, Melipal and Yepun which mean Moon, Sun, Southern Cross as well as Venus. These are used in context to create an interferometer allowing the astronomers to see the details up to 25 times finer than with the individual telescopes. You can make the most of the guided tours carried on here, especially during the weekends. They don’t charge you, but a reservation is required.`,
        imgCap:`Paranal Observatory, Chile, by shami69_flickr.com`
    },
    sec3:{
        heading:`La Silla Observatory, Chile`,
        desc:`
        La Silla is also considered to be an ESO-operated observatory which happens to be another observatory of Chile. This observatory is located at a mountaintop of La Silla, at an altitude of 8,000 feet above the level of the sea. Thus, the entire location is free of light pollution, boasting good weather at the same time. These conditions are considered to be the best conditions for stargazing. This observatory boasts a collection of various telescopes, one of the most famous among which is the High Accuracy Radial Velocity Planet Searcher which constantly remains on the hunt for the extrasolar planets. You can make the most of the free guided tours carried out here during the weekends. These tours are not offered during the months of July and August because of the possibility of snowstorms.`,
        imgCap:`La Silla Observatory, Chile, by European Southern Observatory Follow_ flickr.com`
    },
    sec4:{
        heading:`South African Astronomical Observatory, South Africa`,
        desc:`
        The South African Astronomical Observatory is considered to be home to the South African Large Telescope also known as SALT. SALT happens to be the largest optical telescope of the southern hemisphere. This telescope is so powerful in nature that it is able to detect the objects which are billion times faint to be seen or observed with naked eyes. You can take a tour of this observatory during the day or can even head back after the sunset to make the most of the beautiful sights of the night sky by the way of two dedicated visitor telescopes. Make the most of the tours organized here as you get to know more about the giant universe.`,
        imgCap:`South African Astronomical Observatory, south Africa, by Astronomy & Society Group_flickr.com`
    },
    sec5:{
        heading:`Roque De Los Muchachos Observatory, Spain`,
        desc:`
        This amazing observatory is located in Spain and it is considered to be one of the most famous observatories in the world. It is situated at the best spot of Spain’s Canary Islands which fetches you all the astronomical-friendly atmospheric conditions so that you could make the most while touring this amazing observatory. More than 60 scientific institutions from 17 different countries have visited to observe at the fleet of telescopes that are stationed in this observatory. This observatory is considered to be one of the most extensive observatories of the world. It is located at an altitude of 8,000 feet above the sea level and the most sought-after telescope here is the Swedish 1-m Solar Telescope which is also considered to be the largest solar telescope of Europe.`,
        imgCap:`Roque de Los Muchachos Observatory, Spain. By manolo guijarro_flickr.com`
    },
    sec6:{
        heading:`Sydney Observatory, Australia`,
        desc:`
        The amazing Sydney Observatory is not only positioned to give you a clear image of the night sky but also offer you a beautiful view of the Sydney Harbor. The inside of this observatory is all about the operation of a planetarium as well as a museum that is able to house a wealth of meteorology, astronomy as well as timekeeping equipment. Once you have finished exploring and browsing this observatory during the day time, you must reserve the night time by making the most of observing one of the two telescopes of the observatory. The first one is controlled by a computer and the second telescope is an 1874 refracting telescope which is also considered to be the oldest working telescope throughout the territory of Australia. This observatory is made open from 10 am to 5 pm daily. You always get the opportunity to reserve your nighttime session in advance by the way of doing it online.`,
        imgCap:`Sydney Observatory, Australia, by Timo_flickr.com`
    },

}

const app = angular.module("app",[]);
app.controller("observatoryData",function($scope){
    $scope.Data = Data
})