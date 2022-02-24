let mainNav = $("nav");
const sticky = "sticky";
const navHeight = mainNav.height();
const headerHeight = $("#header").height();


$(window).scroll(function (){
    if($(this).scrollTop() > headerHeight + 125){
        mainNav.addClass(sticky);
        mainNav.removeClass("upper");
    }else if($(this).scrollTop() > navHeight){
        mainNav.addClass("upper");
    }else if($(this).scrollTop() < headerHeight + 125){
        mainNav.removeClass(sticky);
        mainNav.addClass("upper");
        mainNav.removeClass("upper");
    }
})
