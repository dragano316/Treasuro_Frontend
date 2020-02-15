window.onload=()=>{

    const loader=document.getElementById('loader')
    loader.style.visibility="visible"
    // console.log(loader)

// console.log('yes')
    fetch('http://34.242.25.204:3000/leaderboard')
    .then(res=> res.json())
    .then((data) =>{ 
        // console.log(data)
        const _id=window.localStorage.getItem('player_id')
        const scorers=document.getElementById('scorers')
        const position=document.getElementById('position')
        const points=document.getElementById('points')
        points.innerHTML=window.localStorage.getItem('score')
        for(let i=0;i<data.length;i++){
            if(_id===data[i]._id){
                window.localStorage.setItem('currentposition',i+1)
            }
        scorers.innerHTML+=`<div class="p1"><span>${i+1}.</span><span style="text-transform:capitalize; text-align:left;">${data[i].FirstName} ${data[i].LastName}</span><span>${data[i].score}</span></div>`
        }
        position.innerHTML=window.localStorage.getItem('currentposition')
        loader.style.visibility="hidden"
    })
    .catch((e)=>{
        alert('Access Denied.')
        loader.style.visibility="hidden"
    })

}


window.addEventListener('DOMContentLoaded',()=>{
    const current=document.getElementById('current')

    if(window.localStorage.getItem('player_id') && (window.localStorage.getItem('player_name'))){
        current.style.display="block"
        // na.style.display="block"
        // name.innerHTML=window.localStorage.getItem('name')
    }
    else{
        // name.style.display="none"
        current.style.display="none"
    }
})