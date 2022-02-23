let hero = {
    heading:"asteroids",
    desc1:`Asteroids, sometimes called minor planets, are rocky, airless remnants left over from the early formation of our solar system about 4.6 billion years ago.
    The current known asteroid count is `,
    descInlineVal:"1,072,394.",
    desc2:"Most of this ancient space rubble can be found orbiting the Sun between Mars and Jupiter within the main asteroid belt."
}
let sec2 = {
    heading:"Composition",
    desc1:`They are made up of oxygen and silicon, the number one and number two most abundant elements in the Earth's crust. The metallic asteroids are composed of up to 80% iron and 20% a mixture of nickel, iridium, palladium, platinum, gold, magnesium and other precious metals such as osmium, ruthenium and rhodium. `,
    desc2:`The three broad composition classes of asteroids are C-, S-, and M-types. `,
}
let sec3 = {
    heading:"C-type (chondrite)",
    desc1:`C-type (carbonaceous) asteroids are the most common variety, forming around 75% of known asteroids.They occur most frequently at the outer edge of the asteroid belt, 3.5 astronomical units (AU) from the Sun, where 80% of the asteroids are of this type, whereas only 40% of asteroids at 2 AU from the Sun are C-type.`,
}
let sec4 = {
    heading:"S-types (stony)",
    desc1:`S-type asteroids are asteroids with a spectral type that is indicative of a siliceous (i.e. stony) mineralogical composition, hence the name. Approximately 17% of asteroids are of this type, making it the second most common after the carbonaceous C-type.`,
}
let sec5 = {
    heading:"M-type (nickel-iron)",
    desc1:`M-type asteroids are asteroids of partially known composition; they are moderately bright (albedo 0.1–0.2). Some, but not all, are made of nickel–iron, either pure or mixed with small amounts of stone/M-type spectra are flat to reddish and usually devoid of large features, although subtle absorption features longward of 0.75 μm and shortward of 0.55 μm are sometimes present.`,
}
const app = angular.module('app',[])
app.controller('asteroidData',function($scope){
    $scope.hero = hero
    $scope.sec2 = sec2
    $scope.sec3 =sec3
    $scope.sec4 =sec4
    $scope.sec5 =sec5
})