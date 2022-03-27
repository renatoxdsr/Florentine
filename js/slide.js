let time = 4000,
    currentImageIndex = 0,
    //get the pictures 
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

    //function to make the carrossel works
function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // change picture in the carrossel
        nextImage();
    }, time)
}

window.addEventListener("load", start)