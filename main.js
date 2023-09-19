// $('nav a[href^="#"]').click(function)(){
//     let href= $()
// }
let aboutSec = $('#about').offset().top
$(window).scroll(function () {
    if($(window).scrollTop() > aboutSec - 50){
        $('.navbar').addClass('custom-nav fixed-top shadow-lg')
        $('#topButton').css('display','flex')
    }
    else{
        $('.navbar').removeClass('custom-nav fixed-top shadow-lg ')
        $('#topButton').css('display','none')
    }
})
