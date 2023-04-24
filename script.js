// Get the video element
const videoPreview = document.querySelector(".video-preview");

// Add 'mouseover' event listener
videoPreview.addEventListener("mouseover", handleVideoHover);

// Add 'mouseout' event listener
videoPreview.addEventListener("mouseout", handleVideoHover);

function handleVideoHover(event) {
    if (event.type === "mouseover") {
        videoPreview.play();
    } else if (event.type === "mouseout") {
        videoPreview.pause();
    }
}
