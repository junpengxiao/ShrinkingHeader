var postCardH = 138;
var cardMargin = 42;
var gRatio = 0.618;
var doubleCheck = 0;
function ResizeNavbar() {
    var y = window.pageYOffset;
    var navH = postCardH-y;
    if (navH<cardMargin) navH=cardMargin;
    if (navH==doubleCheck) return;//reduce the cpu consumption
    doubleCheck=navH;
    var change = document.getElementsByClassName("navbar");
    var i;
    //Shrink NavBar background
    for (i=0; i < change.length; ++i) {
        change[i].style.height = navH;
    }
    //Make text vertical-align
    change = document.getElementsByClassName("nav-item-left");
    for (i=0; i < change.length; ++i) {
        change[i].style.lineHeight = navH.toString()+"px";
    }
    change = document.getElementsByClassName("nav-item-right");
    for (i=0; i < change.length; ++i) {
        change[i].style.lineHeight = navH.toString()+"px";
    }
    //Change icon size
    change = document.getElementById("brand_icon");
    var gheight = navH*gRatio;
    change.style.height = gheight;
    change.style.width = gheight;
    //Brand Text Animation
    if (gheight<cardMargin)
        document.getElementById("brand_text").style.opacity=0;
    else
        document.getElementById("brand_text").style.opacity=0.5;
}