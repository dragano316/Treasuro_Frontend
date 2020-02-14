document.getElementById('sound').addEventListener('click',(event)=>{
    console.log(event.target.classList.contains('switch'))
})



setTimeout(function(){
    const loader=document.getElementById('loader')
    loader.style.visibility="hidden"
}, 3000);