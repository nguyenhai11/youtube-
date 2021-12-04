document.addEventListener("DOMContentLoaded", function (event)){
    var inputSearch = document.getElementById("keyword")
    inputSearch.onkeydown = function (event){
        if (evenr.keyCode ==13){
            loadVideo(this.value);
        }
    }
    loadVideo("Đen vâu");
});
//get the modal
var modal = document.getElementById('myModal');
//get the <spam> element that cloes the modal
var span = document.getElementsByClassName("close")[0];
var videoFrame = document.getElementById("video-frame");
//When the user click on <spam> (x), close the modal
span.onclick = function (){
    closedVideo();
}
//When the user clicks anywhere uotside of the modal close it
window.onclick = function (event){
    if (event.target == modal){
        closeVideo();
    }
}