const Data = {
    hero:{
        heading:`about us`,
        desc:`we provide information about astronomy and other important events held in the field of astronomy. We are also able to conduct research with our own telescopes, spacecrafts or satellites so that you can gain further insight into Earth and space for yourself. This site provides additional details on how we work which will help us better understand what's happening around earth. So please visit Astronomy UK if anything interesting comes your way - it really is a fantastic project running 24 hours a day!`,
    },
    sec2:{
        heading:`our team`,
        teams:{
            member1Name:`muhammad abdullah`,
            member1Cap:`team leader`,
            member2Name:`usama`,
            member2Cap:`team member`,
            member3Name:`asad ullah`,
            member3Cap:`team member`,
            member4Name:`syeda dua fatima`,
            member4Cap:`team member`,
        }
    }
}
const app = angular.module("app",[]);
app.controller("aboutData",function ($scope) {
    $scope.Data = Data;
})