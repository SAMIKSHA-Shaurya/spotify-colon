console.log("Welcome to Spotify");
//Initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let giif=document.getElementById('giif');
let mastersongname=document.getElementById('mastersongname');
let songItems=Array.from(document.getElementsByClassName('songItems'));

//let songItems=Array.from(document.getElementsByTagName('songItems'));

let  songs= [
    
 {songName:"husn tere tuaba",filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
   {songName:"o maahi",filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
   {songName:"  O sajni re",filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"soni soni",filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"ve haneiya",filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Yimmmy Yimmy",filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},

]

songItems.forEach((element, i) => {
  //  console.log(element, i); // Optional: Log to check iteration

    // Update image source
    let imgElement = element.getElementsByTagName("img")[0];
    if (imgElement) {
        imgElement.src = songs[i].coverPath;
    } else {
        console.error("Image element not found in song item:", element);
        // Handle the error or continue gracefully
    }

    // Update song name
    let songNameElement = element.getElementsByClassName("songName")[0];
    if (songNameElement) {
        songNameElement.innerText = songs[i].songName;
    } else {
        console.error("Song name element not found in song item:", element);
        // Handle the error or continue gracefully
    }
});

//audioElement.play();

//handle play pause click();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove(fa-play-circle);
        masterPlay.classList.add(fa-pause-circle);
        giif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add(fa-play-circle);
        masterPlay.classList.remove(fa-pause-circle);
        giif.style.opacity=0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
  //  console.log('timeupdate');
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
 // console.log(progress);
   myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=(myProgressBar.value * audioElement.duration/100);
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        giif.style.opacity=1;
        masterPlay.classList.remove(fa-play-circle);
        masterPlay.classList.add(fa-pause-circle);
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        
        audioElement.play();
        masterPlay.classList.remove(fa-play-circle);
        masterPlay.classList.add(fa-pause-circle);
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        
        audioElement.play();
        masterPlay.classList.remove(fa-play-circle);
        masterPlay.classList.add(fa-pause-circle);
})