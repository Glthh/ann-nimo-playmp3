isPlaying = false;
var musicPlaying = document.getElementById("music-playing");
var music = document.getElementById("music-playing");



var nome = "";
function musica() {
nome = document.getElementById('valor').value;

fetch(`http://nezsab-api2.herokuapp.com/youtube/playmp3?q=${nome}&apikey=key-do-anonimo-2.6`)
.then(bct => bct.json())
.then(ress => ress.resultado)
.then(puxJson => {
const kkkk = [];
biel = {
title : puxJson.titulo,
thumb: puxJson.thumb,
url: puxJson.download,
};
kkkk.push(biel);

mae = kkkk.map((kkk) => `
         <div class="pla">
        <marquee class="kk"><h1>${kkk.title}<h1></marquee>
<div id="image-music">
    <img src="${kkk.thumb}" style="width: 100%;  height: 100%;border-radius: 16px;border: 1.5px solid #0018ff;"></img>
</div>
        <div class="progress-area" id="progress-area">
            <div class="progress-bar" id="progress-bar"></div>
        </div>
        <audio id="music-playing" src="${kkk.url}"></audio>
        <div class="timer">
            <span id="current">0:00</span>
            <span id="duration">0:00</span>
        </div>

       <div class="player">
            <button class="btn-player">
                <img src="./download-music.svg" alt="">
            </button>

            <button class="btn-player" id="play-prevMusic">
                <img src="./prev-music.svg" alt="">
            </button>

            <div class="controlPlayPauseMusic" onclick="toggleIsPlaying()">

                <button class="btn-player" id="play-music">
                    <img id="play-music-icon" src="./play-music.svg"/>
                </button>

            </div>

            <button class="btn-player" id="play-nextMusic">
                <img src="./next-music.svg" alt="" onclick="nextMusic()">
            </button>

            <button class="btn-player" onclick="muteMusic()">
                <img id="mute-music-icon" src="./mute-music.svg"/>
            </button>
        </div>
        </div>

`).join(" ")
document.querySelector('.pg').innerHTML = mae;

})
}

//Setar a música atual selecionada
function setCurrentMusic(id) {
    var image = document.getElementById("image-music");
    var nameMusic = document.getElementById("name-music");
    var nameArtist = document.getElementById("name-artist");
    var musicPlaying = document.getElementById("music-playing");
    var playMusicIcon = document.getElementById("play-music-icon");
    
    image.style.backgroundImage = `url(${myMusics[id].bg})`;
    nameMusic.innerText = `${myMusics[id].name}`;
    nameArtist.innerText = `${myMusics[id].artist}`;
    musicPlaying.src = `${myMusics[id].song}`;

    progressBar.style.width = '0%';
    playMusicIcon.src = './play-music.svg';
    isPlaying = false;
};

//Toggle de play e pause
function toggleIsPlaying() {
    var playMusicIcon = document.getElementById("play-music-icon");

    if(isPlaying) {
        playMusicIcon.src = './play-music.svg';
        isPlaying = false;
        pauseMusic(playMusicIcon);
    } else {
        playMusicIcon.src = './pause-music.svg';
        isPlaying = true;
        playMusic(playMusicIcon);
    }
};


//Começar uma música
function playMusic(icon) {
    var playMusicIcon = document.getElementById("play-music-icon");
    playMusicIcon.src = './pause-music.svg';
    isPlaying = true;
    music = document.getElementById("music-playing");
    music.play();
};

//Pausar uma música
function pauseMusic(icon) {
    var playMusicIcon = document.getElementById("play-music-icon");
    playMusicIcon.src = './play-music.svg';
    music = document.getElementById("music-playing");
    music.pause();
};

