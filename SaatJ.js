

const san = document.querySelector(".saniye");
const dak = document.querySelector(".dakika");
const sat = document.querySelector(".saat");

var saniye
var dakika;
var saat;

function tiktak(){

    saniye= new Date().getSeconds();
    dakika = new Date().getMinutes();
    saat = new Date().getHours();

    san.style.transform = `rotate(${180 + (saniye *6)}deg)`;

    dak.style.transform = `rotate(${180 + (dakika *6) + (saniye*6)/60 }deg)`;

    sat.style.transform = `rotate(${180 + (saat *30)}deg)`;
}

setInterval(tiktak,1000);