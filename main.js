var imgElements = document.querySelectorAll(".img_slider");
let btnLeft = document.querySelector(".prev");
let btnRight = document.querySelector(".next");

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

btnLeft.addEventListener('click', function() {
    document.querySelector(".slider_images").scrollLeft -= 100;
    console.log(document.querySelector(".slider_images").scrollLeft);
} );

btnRight.addEventListener('click', function() {
    document.querySelector(".slider_images").scrollLeft += 100;
    console.log(document.querySelector(".slider_images").scrollLeft);
} )

// fix on img on hover
imgElements.forEach(element => {
    element.addEventListener('mouseover', function(){
      
    });
});