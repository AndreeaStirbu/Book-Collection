var imgElements = document.querySelectorAll(".img_slider");

function updateBackground(elem){
    let colour;
    Vibrant.from(elem.src).getPalette(function(err, palette) {
        console.log(palette);
        colour = palette["Vibrant"].hex; //DarkVibrant //Muted //Vibrant
        document.body.style.background = colour;
    });
}

imgElements.forEach(elem => {      
    elem.onclick = function() { updateBackground(elem);}
})