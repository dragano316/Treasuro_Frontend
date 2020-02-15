



setTimeout(function(){
    const loader=document.getElementById('loader')
    loader.style.visibility="hidden"
}, 3000);



window.onload=()=>{
    if(window.localStorage.getItem('player_name') && window.localStorage.getItem('player_id')){
        window.location='./questions.html'
    }
}


// document.getElementById('dashboard')

