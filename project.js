console.log("Welcome to Spotify");


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Legend" , filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName: "Peaches" , filePath: "songs/2.mp3", coverPath: "cover2.jpg"},
    {songName: "295" , filePath: "songs/3.mp3", coverPath: "cover3.jpg"},
    {songName: "Born To Shine" , filePath: "songs/4.mp3", coverPath: "cover4.jpg"},
    {songName: "Champagne" , filePath: "songs/5.mp3", coverPath: "cover5.jpg"},
    {songName: "Lemonade" , filePath: "songs/6.mp3", coverPath: "cover6.jpg"},
    {songName: "Levels" , filePath: "songs/7.mp3", coverPath: "cover7.jpg"},
    {songName: "Lover" , filePath: "songs/8.mp3", coverPath: "cover8.jpg"},
    {songName: "The Last Ride" , filePath: "songs/9.mp3", coverPath: "cover9.jpg"},
    {songName: "These Days" , filePath: "songs/10.mp3", coverPath: "cover10.jpg"},
]    

songItems.forEach((element , i) =>{
    //console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//audioElement.play();

masterPlay.addEventListener ('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  // console.log(progress);
    myProgressBar.value = progress;  
})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{   
        makeAllPlays();
        songIndex =  parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName; 
        
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})