
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$('.carouselMobile').carousel({
    interval: 2500
});

$("#Guidance").click(function() {

    $('html, body').animate({
        scrollTop: $("#GuidanceContent").offset().top - 120
      }, 1000);
});

$("#Counselling").click(function() {

    $('html, body').animate({
        scrollTop: $("#CounsellingContent").offset().top - 160
      }, 1000);
});

$("#Partners").click(function() {

    $('html, body').animate({
        scrollTop: $("#AboutContent").offset().top - 160
      }, 1000);
});

$(".counselLink #knowMore").click(function() {

    $('html, body').animate({
        scrollTop: $(".contactUs").offset().top - 160
      }, 1000);
});

$("#takeTestOne").click(function() {

    window.location.href = "https://rzp.io/l/essa";
});

$("#takeTestTwo").click(function() {

    window.location.href = "https://rzp.io/l/CICSA";
});

$("#takeTestThree").click(function() {

    window.location.href = "#";
});
