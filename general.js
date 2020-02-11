window.addEventListener('DOMContentLoaded',()=>{

    const logoutbutton=document.getElementById('loggingout')
    const name=document.getElementById('naming')

    const questions=document.getElementById('showquestions')

    if(window.localStorage.getItem('player_id') && (window.localStorage.getItem('name'))){
        logoutbutton.style.display="block"
        name.style.display="block"
        name.innerHTML=window.localStorage.getItem('name')
        questions.style.display="block"
        

    }
    else{
        name.style.display="none"
        logoutbutton.style.display="none"
        questions.style.display="none"
    }
})




document.getElementById('loggingout').addEventListener('click',()=>{
    window.localStorage.clear()
    window.location='./index.html'
})



document.getElementById('box').addEventListener('click',()=>{
    if(document.getElementById('box').checked){

        play()
        console.log('yes')
    }
    else{
        var audio = document.getElementById("audio");
        audio.pause()
        audio.currentTime=0

        console.log('no')
    }
})


function play() {
    var audio = document.getElementById("audio");
    audio.loop=true
    audio.play();
  }



  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }