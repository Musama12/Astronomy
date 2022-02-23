const Data={
    hero:{
        heading:`top 5 astronomical discoveries`
    },
    sec2:{
        heading:`gravitational waves`,
        desc1:`The existence of gravitational waves was first predicted in 1916 by Albert Einstein, who suggested that when two massive accelerating objects collide they cause ripples to be discharged through space, similar to the ripples seen when a pebble is thrown into water. Almost 100 years later scientists were still struggling to directly detect them, something even Einstein himself doubted could be done. When a wave passes through Earth it is squeezing and stretching the fabric of space, but as these differences are so tiny most instruments have not been able to detect these changes until recently.`,
        desc2:`Named LIGO (Laser Interferometer Gravitational-Wave Observatory), this laser- and mirror-based technology is sensitive to the smallest ripples through space-time. This pioneering US research facility uses two four-kilometre L-shaped detectors located in Livingston in Louisiana and Hanford in the state of Washington.`,
        desc3:`On 14 September 2015, the moment the scientists had been waiting for came when a gravitational wave rippled through the Earth caused by the violent crash of two black holes over 1 billion years ago. The first wave passed through the Livingston facility before then being detected seven milliseconds later in Hanford, 3,000 kilometres away. Not only did this discovery prove that Einstein’s theory was right, but it will revolutionise our very understanding of the entire universe.`
    },
    sec3:{
        heading:`Cosmic microwave background radiation`,
        desc1:`in the mid-1960s astronomers, Arno Penzias and Robert Wilson discovered cosmic microwave background radiation. This radiation is present in tiny quantities throughout the entire universe as the residual radiation left from the birth of the universe. Their discovery was of enormous cosmological significance, transforming the (at the time) controversial Big Bang Theory into the scientifically accepted explanation of the birth of the universe.`,
        desc2:`Like many of the best scientific discoveries, it happened almost accidentally. While working with a very sensitive radio telescope at Bell Labs in New Jersey, US, they noticed a mysterious hissing sound coming from all directions. Frustrated by the interference, they did their best to work out the cause of the sound, even removing some birds that had made a nest in the antenna, before realising they were onto something big. They had discovered the echo of the explosion that caused the beginning of the universe.`,
    },
    sec4:{
        heading:`The universe is expanding`,
        desc1:`Edwin Hubble was the first to discover other galaxies beyond our own Milky Way, but it turns out that this discovery alone wasn’t impressive enough to get a telescope named after him! Hubble actually made an even greater contribution to science that changed the way we understand the origins of our universe. In 1929 Hubble discovered that all galaxies seemed to be moving away from us and the ones furthest away are moving the fastest — a relationship now known as Hubble’s Law.`,
        
        desc2:`This was the first evidence indicating the universe is expanding. Hubble took long-exposure photographs of the spectra of faint galaxies using a telescope and measured the amount they shifted to calculate their speed. He then plotted the speed of the galaxies against their distance and noticed the interesting relationship between the data. This really had scientists thinking. If the universe is expanding it must have been smaller in the past, so it must have started from one small point. This formed the basis of the Big Bang Theory.`,
    },
    sec5:{
        heading:`Black holes`,
        desc1:`The mathematical concept of black holes is one that has been around for hundreds of years, but it was always impossible to find evidence for their existence before the Hubble Telescope. Designed to take clear pictures of the deepest parts of space, this incredible feat of engineering was launched into space in 1990 and has provided images showing black holes’ immense gravity — their ability to pull matter from around them. Black holes are thought to form when massive stars die, imploding from their own weight and have such a strong pull of gravity that not even light can escape, which is why we can’t directly detect them with conventional methods.`,
    },
    sec6:{
        heading:`Water on Mars`,
        desc1:`Shortly after humans first landed on the Moon in 1969, NASA’s Viking mission took one more giant leap by sending a lander to Mars in 1976. Many of the rovers and satellites sent to the Red Planet since then have returned data providing evidence that there had once been water on the planet, with the discovery of ancient riverbeds and remnants of vast flooding. And in 2015 NASA’s Mars Reconnaissance Orbiter (MRO) provided conclusive evidence that liquid water still flows intermittently on Mars.`,
    },
}

const app = angular.module("app",[]);
app.controller("discData",function($scope){
    $scope.Data = Data

})