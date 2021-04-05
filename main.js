var imgElements = document.querySelectorAll(".img_slider");

/**
 * Update the background colour of the page with the vibrant colour of the image that has been clicked.
 * @param {HTML element} image The image that has been clicked
 */
function updateBackgroundColour(image){
    let colour;
    Vibrant.from(image.src).getPalette(function(err, palette) {
        colour = palette["Vibrant"].hex; //DarkVibrant //Muted //Vibrant
        document.body.style.background = colour;
    });
}

imgElements.forEach(image => {      
    image.onclick = function() { updateBackgroundColour(image);}
})