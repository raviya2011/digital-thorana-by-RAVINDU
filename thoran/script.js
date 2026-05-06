// all videos select කරගන්නවා
const videos = document.querySelectorAll("video");

// page load වෙද්දී run වෙන්න
window.addEventListener("load", () => {

    videos.forEach(video => {
        video.muted = true;        // autoplay allow වෙන්න
        video.loop = true;         // repeat
        video.playsInline = true;  // mobile support

        // play try කරනවා
        video.play().catch(err => {
            console.log("Autoplay blocked:", err);
        });
    });

});