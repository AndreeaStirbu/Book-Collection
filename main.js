var imgElements = document.querySelectorAll(".img_carousel");
var textToUpdate = document.querySelector("#text-update");

function updateBackground(color){
    document.body.style.background = color;
}

imgElements.forEach(elem => {
    elem.onclick = function() { updateBackground('blue');}
})