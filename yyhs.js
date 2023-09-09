console.log("Welcome to Spotify");


let songIndex = 0;
let audioElement = new Audio('Honey/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Hai Apna Dil-The Xpose" , filePath: "Honey/1.mp3", coverPath: "yyhs/1.png"},
    {songName: "Daftar Ki Girl" , filePath: "Honey/2.mp3", coverPath: "yyhs/2.png"},
    {songName: "Billo Tu Agg" , filePath: "Honey/3.mp3", coverPath: "yyhs/3.png"},
    {songName: "First Kiss" , filePath: "Honey/4.mp3", coverPath: "yyhs/4.png"},
    {songName: "Gaddi Neevi" , filePath: "Honey/5.mp3", coverPath: "yyhs/5.png"},
    {songName: "High Heels" , filePath: "Honey/6.mp3", coverPath: "yyhs/6.png"},
    {songName: "Jaam" , filePath: "Honey/7.mp3", coverPath: "yyhs/7.png"},
    {songName: "Jingle Bell" , filePath: "Honey/8.mp3", coverPath: "yyhs/8.png"},
    {songName: "Shor Machega" , filePath: "Honey/9.mp3", coverPath: "yyhs/9.png"},
    {songName: "Tanning" , filePath: "Honey/10.mp3", coverPath: "yyhs/10.png"},
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
        audioElement.src=`Honey/${songIndex+1}.mp3`;
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
    audioElement.src=`Honey/${songIndex+1}.mp3`;
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
    audioElement.src=`Honey/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})