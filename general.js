window.addEventListener('DOMContentLoaded',(event)=>{


    if(window.localStorage.getItem('player_song')==="true" && event.target){
        document.getElementById('sound').checked=true
        // console.log('yeshasit')
        var audio = document.getElementById("audio").play()
        audio.loop=true

        if (audio !== undefined) {
        audio.then(function() {
            // console.log('playing')
              // Automatic playback started!
            }).catch(function(error) {
                // console.log('notplayihn')
                window.localStorage.removeItem('player_song')
                document.getElementById('sound').checked=false

                // Automatic playback failed.
              // Show a UI element to let the user manually start playback.
            });
          }

    }

    const logoutbutton=document.getElementById('loggingout')
    const name=document.getElementById('naming')
    const questions=document.getElementById('showquestions')

    if(window.localStorage.getItem('player_id') && (window.localStorage.getItem('player_name'))){
        logoutbutton.style.display="block"
        name.style.display="block"
        name.innerHTML=window.localStorage.getItem('player_name')
        questions.style.display="block"

        const home=document.getElementById('home')
        home.style.display="none"
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



// document.getElementById('box').addEventListener('click',()=>{

//     else{
//         var audio = document.getElementById("audio");
//         window.localStorage.removeItem('player_song')
//         audio.pause()
//         audio.currentTime=0

//         // console.log('no')
//     }
// })


function play() {
    var audio = document.getElementById("audio");
    window.localStorage.setItem('player_song',"true")
    audio.loop=true
    audio.play();
}


function stopPlay(){
        var audio = document.getElementById("audio");
        window.localStorage.removeItem('player_song')
        audio.pause()
        audio.currentTime=0
}


// window.reload=()=>{
//     var audio = document.getElementById("audio");
//     audio.pause();
// }


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  document.getElementById('box').addEventListener('click',(event)=>{
    if(document.getElementById('sound').checked==true){
        // play()
        // console.log(event.target)
        stopPlay()
        // console.log('yes')
    }
    else{
        // console.log(event.target)

        play()
        // console.log('no')
    }
    
})



// window.onload=()=>{
//     if(window.localStorage.getItem('player_song')==="true"){
//         document.getElementById('sound').checked=true
//         console.log('yeshasit')
//         var audio = document.getElementById("audio");
//         audio.load()
//     }

// }


