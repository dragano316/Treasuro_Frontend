// ?${user_id}
// const user_id=window.localStorage.getItem('_id')

const check=(e)=>{
    e.preventDefault()
    
    var answer=document.getElementById('answer').value
    // const password=document.getElementById('password').value
const user_id=window.localStorage.getItem('player_id')
    // console.log(id)
    // console.log(password)

    const checking={
        answer
        // Password:password
    }

    fetch(`http://localhost:3000/level?user=${user_id}`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(checking)
    })
    .then((res)=>{
        if(res.ok){
            return res.json()
        }else{
            return Promise.reject({status:res.satus,statusText:res.statusText})
        }
    })
    .then((data)=>{
        console.log(data)
        const newquest=document.getElementById('newques')
        document.getElementById('check').reset()
        window.localStorage.setItem('score',data.user.score)
        window.localStorage.setItem('level',data.user.level)
        window.localStorage.setItem('attempts',data.user.attempts)
        const level=document.getElementById('level')
        const attempts=document.getElementById('attemptsleft')
        const score=document.getElementById('score')
        level.innerHTML=window.localStorage.getItem('level')
        attempts.innerHTML=window.localStorage.getItem('attempts')
        score.innerHTML=window.localStorage.getItem('score')

        if(data.answer==="Wrong"){
            alert('Wrong Answer')
        }
        else if(data.user.attempts===0){
            alert('You Have reached your maximum limit of attempts. Kindly Buy a new ticket to continue playing')
            window.localStorage.clear()
            window.location='./index.html'
        }
        else if(data.answer==="Won"){
            alert('You have successfully completed the game')
            window.localStorage.clear()
            window.location='./index.html'
        }
        else{
            alert('Right Answer!!!')
            newquest.innerHTML=data.newquestion.level+' '+data.newquestion.question
        }
    })
    .catch((e)=>alert('Please Try Again Later'))


}


document.getElementById('check').addEventListener('submit',check)



window.addEventListener('DOMContentLoaded',()=>{

    const user_id=window.localStorage.getItem('player_id')


    fetch(`http://localhost:3000/getquestions?user=${user_id}`)
    .then(res=> res.json())
    .then((data)=>{
        console.log(data)
        const newquest=document.getElementById('newques')
        window.localStorage.setItem('score',data.person.score)
        window.localStorage.setItem('level',data.person.level)
        window.localStorage.setItem('attempts',data.person.attempts)
        const level=document.getElementById('level')
        const attempts=document.getElementById('attemptsleft')
        const score=document.getElementById('score')
        level.innerHTML=window.localStorage.getItem('level')
        attempts.innerHTML=window.localStorage.getItem('attempts')
        score.innerHTML=window.localStorage.getItem('score')
        newquest.innerHTML=data.ques.level+' . '+data.ques.question
        // const newquest=document.getElementById('newques')
        // document.getElementById('check').reset()
        // window.localStorage.setItem('score',data.user.score)
        // window.localStorage.setItem('level',data.user.level)
        // window.localStorage.setItem('attempts',data.user.attempts)
        // if(data.answer==="Wrong"){
        //     // window.localStorage
        // }
        // else if(data.user.attempts===0){
        //     alert('You Have reached your maximum limit of attempts. Kindly Buy a new ticket to continue playing')
        //     window.localStorage.clear()
        //     // window.location='./index.html'
        // }
        // else if(data.answer==="Won"){
        //     alert('You have successfully completed the game')
        //     window.localStorage.clear()
        //     // window.location='./index.html'
        // }
        // else{
        //     alert('Right Answer!!!')
        //     newquest.innerHTML=data.newquestion.question
        // }
    })
    .catch((e)=>console.log(e))


})