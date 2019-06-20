var buttonFull = document.querySelector('.welGevuld');
var buttonEmpty = document.querySelector('.nietGevuld');
var popButton = document.querySelector('.popButton');
var welkomBlok = document.querySelector('#welkomBlok');
var fotoHotel = document.querySelector('.hotel');
var buttonsHome = document.querySelector('.bekijkButton');
var wegKruis = document.querySelector('.kruis');
var aanbod = document.querySelector('.aanbod');
var popInlog = document.querySelector('.popInlog');
var inloggen = document.querySelector('.inloggen');
var gaDoor = document.querySelector('.gaDoor');
var aanbod1 = document.querySelector('.aanbod1');
var aanbod2 = document.querySelector('.aanbod2');
var aanbod3 = document.querySelector('.aanbod3');
var zieDeal1 = document.querySelector('.zieDeal1');
var zieDeal2 = document.querySelector('.zieDeal2');
var zieDeal3 = document.querySelector('.zieDeal3');
var experience = document.querySelector('.experience');
var explaining = document.querySelector('.explaining');
var kies = document.querySelector('.kies');
var kies2 = document.querySelector('.kies2');
var kies3 = document.querySelector('.kies3');
var menuHeader = document.querySelector('.menuHeader');
var logo = document.querySelector('.logo');
var inloggenInPop = document.querySelector('.inloggenInPop');
var notificatie = document.querySelector('.notificatie');
var noteGaVerder = document.querySelector('.noteGaVerder');
var yesNotification = document.querySelector('.yesNotification');
var inlogAanbod = document.querySelector('.inlogAanbod');




//////////////pop up na hover voor inlog///////////
function slideDown() {
    popInlog.classList.add("popInlogActive");
}

function echtInloggen() {
    popInlog.classList.add("inloggenClick");
}

function slideUp() {
    popInlog.classList.add("popInlogOff");
}


fotoHotel.addEventListener("mouseover", slideDown);
inloggenInPop.addEventListener("click", echtInloggen);
wegKruis.addEventListener("click", slideUp);

//////////////////////////notificatie//////////////////////////

function noteOn() {
    menuHeader.classList.add("notificationActive");
}

buttonFull.addEventListener("mouseover", noteOn);
buttonEmpty.addEventListener("mouseover", noteOn);

//////////////////////pop up na klikken van button///////////
function fadeIn() {
    popButton.classList.add("articleFadeIn");
    welkomBlok.classList.add("welkomBlok");
    fotoHotel.classList.remove("fotoHotel");
    buttonsHome.classList.add("buttonsHome");
    aanbod.classList.add("aanbodPopupBlur");
    popInlog.classList.remove("popInlogActive");
}

function fadeOut() {
    popButton.classList.remove("articleFadeIn");
    welkomBlok.classList.add("welkomBlokWeg");
    //    popButton.classList.add("articleFadeOut");
    buttonsHome.classList.add("buttonsHomeWeg");
    aanbod.classList.add("aanbodPopup");
    //    buttonsHome.classList.add("buttonsHomeWeg");

}


inlogAanbod.addEventListener("click", fadeIn);
buttonFull.addEventListener("click", fadeIn);
buttonEmpty.addEventListener("click", fadeIn);
gaDoor.addEventListener("click", fadeOut);

//////////////////////read more aanbod///////////

function readMore() {
    aanbod1.classList.add("aanbod1RM");
}

function readMoree() {
    aanbod2.classList.add("aanbod2RM");
}

function readMoreee() {
    aanbod3.classList.add("aanbod3RM");
}

zieDeal1.addEventListener("click", readMore);
zieDeal2.addEventListener("click", readMoree);
zieDeal3.addEventListener("click", readMoreee);

//////////////////////Eindpagina/////////////////////

function endPage() {
    experience.classList.add("experienceWeg");
    explaining.classList.add("seeExplaining");
    menuHeader.classList.add("menuHeaderWeg");
    logo.classList.add("logoWeg");
}

kies.addEventListener("click", endPage);
kies2.addEventListener("click", endPage);
kies3.addEventListener("click", endPage);

//verleidingstechnieken