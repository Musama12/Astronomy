$(function (){

    //dropdown footer
    console.log( $('footer .dropdown'))
   $('footer .dropdown').siblings('ul').slideUp()
   $('footer .dropdown').click(function () {
       $(this).siblings('ul').slideToggle()
   })
})