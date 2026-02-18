const arrowbtn=document.getElementById("arrow")
const songlist=document.getElementById("song-list")
const musicPlayer=document.getElementById("music-player")
const SongList1=document.getElementById("song-track")
const playButton=document.getElementById("play-button")
const image=document.getElementById("image")
const currSongName=document.getElementById("tag-name")
const prevBtn=document.getElementById("prev")
const nextBtn=document.getElementById("next")
let currSong=new Audio(`Ishq_Jalakar_Dhurandhar.mp3`)
const progressBar=document.getElementById("progress")
const volumeBar=document.getElementById("volume")
let currIndex=0
currSong.volume=0.5


arrowbtn.addEventListener("click",() => {

  if(arrowbtn.classList.contains("fa-arrow-right")){

    arrowbtn.classList.remove("fa-arrow-right")
    arrowbtn.classList.add("fa-arrow-left")
    songlist.style.display="none"
    songlist.style.width="0vw"
    musicPlayer.style.width="100vw"
  }else{

     arrowbtn.classList.remove("fa-arrow-left")
    arrowbtn.classList.add("fa-arrow-right")
     songlist.style.display="block"
     songlist.style.width="20vw"
    musicPlayer.style.width="80vw"
  }
})

const songsInfo=[
{
    name:"Ishq Jalakar",
    img:"https://pagalnew.com/coverimages/run-down-the-city-monica-dhurandhar-500-500.jpg",
    trackName:"Ishq_Jalakar_Dhurandhar.mp3"
  },
  {
     name:"Lutt Le Gaya",
    img:"https://pagalnew.com/coverimages/run-down-the-city-monica-dhurandhar-500-500.jpg",
    trackName:"Lutt_Le_Gaya_Dhurandhar.mp3"
  },
  {
   name:"Ramba Ho",
    img:"https://pagalnew.com/coverimages/run-down-the-city-monica-dhurandhar-500-500.jpg",
    trackName:"Ramba_Ho_Dhurandhar.mp3"
  },
  {
    name:"Run Down",
    img:"https://pagalnew.com/coverimages/run-down-the-city-monica-dhurandhar-500-500.jpg",
    trackName:"Run_Down_The_City_Monica_Dhurandhar.mp3"
  },
  {
    name:"Shararat",
    img:"https://pagalnew.com/coverimages/run-down-the-city-monica-dhurandhar-500-500.jpg",
    trackName:"Shararat_Dhurandhar.mp3"
  }
]
let foundSong=songsInfo[0]

for(let item of songsInfo){

  const songItem=document.createElement("p")
  songItem.innerText=item.name
  songItem.setAttribute("class","songItem")
  SongList1.append(songItem)

}

const allSongs=document.querySelectorAll(".songItem")


for(let item of allSongs){

  item.addEventListener("click",(e)=>{
    playButton.classList.remove("fa-play")
    playButton.classList.add("fa-pause")
 const clickedSong=e.target.innerText
   foundSong=songsInfo.find((item,index) =>{
currIndex=index
     return clickedSong==item.name
     
  })
  image.src=foundSong.img
  currSongName.innerText=foundSong.name
  currSong.src=`./media/${foundSong.trackName}`
  currSong.play()
 
  })
   
 
}

playButton.addEventListener("click",() =>{
 
  if(playButton.classList.contains("fa-play")){
 image.src=foundSong.img
  currSongName.innerText=foundSong.name
  currSong.src=`./media/${foundSong.trackName}`
    playButton.classList.remove("fa-play")
     playButton.classList.add("fa-pause")
    currSong.play()

  }else{

    playButton.classList.remove("fa-pause")
     playButton.classList.add("fa-play")
 currSong.pause()
  }
})

nextBtn.addEventListener("click",()=>{
 currSong.pause()
  currIndex++

  if(currIndex==songsInfo.length){
    currIndex=0
  }
  if(playButton.classList.contains("fa-play")){
      
    playButton.classList.remove("fa-play")
     playButton.classList.add("fa-pause")
  }
  foundSong=songsInfo[currIndex]
   image.src=foundSong.img
  currSongName.innerText=foundSong.name
   currSong.src=`./media/${foundSong.trackName}`

  currSong.play()


})

prevBtn.addEventListener("click",()=>{
 currSong.pause()
  currIndex--

  if(currIndex<0){
    currIndex=songsInfo.length-1
  }
  if(playButton.classList.contains("fa-play")){
      
    playButton.classList.remove("fa-play")
     playButton.classList.add("fa-pause")
  }
  foundSong=songsInfo[currIndex]
   image.src=foundSong.img
  currSongName.innerText=foundSong.name
   currSong.src=`./media/${foundSong.trackName}`
  currSong.play()


})

currSong.addEventListener("timeupdate",() =>{

  progressBar.value=(( currSong.currentTime/currSong.duration)*100)
})

progressBar.addEventListener("input",()=>{

  currSong.currentTime=(progressBar.value*currSong.duration)/100
})

volumeBar.addEventListener("input",()=>{

  currSong.volume=(volumeBar.value)/100
})