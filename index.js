window.addEventListener("load", function() {
    if (window.location.protocol === "file:") {
        alert("Stránka běží bez Live Serveru, tudíž nemusí fungovat správně.");
    }
});
window.onload = function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        window.location.href = 'site/mainsite.html';
    });
}