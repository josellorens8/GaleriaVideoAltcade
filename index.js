
document.querySelectorAll('.video-container .video').forEach(vid => {
    vid.onclick = () => {
        const iframeSrc = vid.querySelector('iframe').src;
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video iframe').src = iframeSrc;
    };
});

document.querySelector('.popup-video span').onclick = () =>{
    document.querySelector('.popup-video').style.display = 'none';
}

/*const play = document.querySelector(".video");
const ventanamodal = document.querySelector(".popup-video");

play.onclick = function(){
    ventanamodal.style.display = "block";
}

ventanamodal.onclick = function(){
    ventanamodal.style.display = "none";
}*/