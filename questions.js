// ?${user_id}
// const user_id=window.localStorage.getItem('_id')



// const check=(e)=>{
//     e.preventDefault()
    
//     var answer=document.getElementById('answer').value
//     // const password=document.getElementById('password').value
// const user_id=window.localStorage.getItem('player_id')
//     // console.log(id)
//     // console.log(password)

//     const checking={
//         answer
//     }

//     console.log(checking)

//     fetch(`http://localhost:3000/level?user=${user_id}`,{
//         method:'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(checking)
//     })
//     .then((res)=>{
//         if(res.ok){
//             return res.json()
//         }else{
//             return Promise.reject({status:res.satus,statusText:res.statusText})
//         }
//     })
//     .then((data)=>{
//         console.log(data)
//         const newquest=document.getElementById('newques')
//         const id=document.getElementById('idd')
//         // document.getElementById('check').reset()
//         window.localStorage.setItem('score',data.user.score)
//         window.localStorage.setItem('level',data.user.level)
//         window.localStorage.setItem('attempts',data.user.attempts)
//         const level=document.getElementById('level')
//         const attempts=document.getElementById('attemptsleft')
//         const score=document.getElementById('score')
//         level.innerHTML=window.localStorage.getItem('level')
//         attempts.innerHTML=window.localStorage.getItem('attempts')
//         score.innerHTML=window.localStorage.getItem('score')

//         if(data.answer==="Wrong"){
//             alert('Wrong Answer')
//         }
//         else if(data.user.attempts===0){
//             alert('You Have reached your maximum limit of attempts. Kindly Buy a new ticket to continue playing')
//             window.localStorage.clear()
//             window.location='./index.html'
//         }
//         else if(data.answer==="Won"){
//             alert('You have successfully completed the game')
//             window.localStorage.clear()
//             window.location='./index.html'
//         }
//         else{
//             alert('Right Answer!!!')
//             id.innerHTML=`Question-${data.newquestion.level}`
//             newquest.innerHTML=data.newquestion.question
//         }
//     })
//     .catch((e)=>alert('Please Try Again Later'))


// }


// document.getElementById('check').addEventListener('submit',check)



window.addEventListener('DOMContentLoaded',()=>{

    if(window.localStorage.getItem('player_id') && window.localStorage.getItem('player_name')){

        if(window.location.search){
            document.getElementById('box1').style.display="none"
            document.getElementById('box2').style.display="none"
            const user_id=window.localStorage.getItem('player_id')
            // console.log(window.location.search)
            const urlParams = new URLSearchParams(window.location.search);
            const myParam1 = urlParams.get('ans');
            const myParam2 = urlParams.get('level');
            // console.log(myParam1)
            // console.log(myParam2)

            const checking={
                answer:myParam1,
                level:myParam2
            }
        
            fetch(`http://34.242.25.204:3000/level?user=${user_id}`,{
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
                // console.log(data)
                const newquest=document.getElementById('newques')
                // document.getElementById('check').reset()
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
                    // alert('Wrong Answer')
                    document.getElementById('ans').innerHTML='Wrong Answer!! You will be Redirected to the Dashboard.'

                    setTimeout(function(){
                        window.location='./questions.html';
                     }, 2000);

                    // window.location='./questions.html'
                }
                else if(data.user.attempts===0){

                    alert('You Have reached your maximum limit of attempts. Kindly Buy a new ticket to continue playing.')
                    window.localStorage.clear()
                    window.location='./index.html'
                }
                else if(data.answer==="Won"){
                    document.getElementById('ans').innerHTML='Game Completed!!'
                    window.localStorage.clear()
                    setTimeout(function(){
                        window.location='./index.html';
                     }, 2000);
                    // alert('You have successfully completed the game')
                    
                    // window.location='./index.html'
                }
                else{
                    document.getElementById('ans').innerHTML='Right Answer!! You will be Redirected to the Dashboard.'
                    setTimeout(function(){
                        window.location='./questions.html';
                     }, 2000);
                    // document.getElementById('box1').style.display="block"
                    // document.getElementById('box2').style.display="block"
                    // alert('Right Answer!!!')
                    // newquest.innerHTML=data.newquestion.level+' '+data.newquestion.question
                }
            })
            .catch((e)=>alert(e))
        
        }

        else{
        
            const loader=document.getElementById('loader')
            loader.style.visibility="visible"
            // console.log(loader)

        const user_id=window.localStorage.getItem('player_id')


    fetch(`http://34.242.25.204:3000/getquestions?user=${user_id}`)
    .then(res=> res.json())
    .then((data)=>{
        // console.log(data)
        const newquest=document.getElementById('newques')
        const id=document.getElementById('idd')
        window.localStorage.setItem('score',data.person.score)
        window.localStorage.setItem('level',data.person.level)
        window.localStorage.setItem('attempts',data.person.attempts)
        const level=document.getElementById('level')
        const attempts=document.getElementById('attemptsleft')
        const score=document.getElementById('score')
        level.innerHTML=window.localStorage.getItem('level')
        attempts.innerHTML=window.localStorage.getItem('attempts')
        score.innerHTML=window.localStorage.getItem('score')
        id.innerHTML=`Question-${data.ques.level}`
        newquest.innerHTML=data.ques.question
        loader.style.visibility="hidden"
        // newquest.innerHTML=data.ques.level+' . '+data.ques.question
        
})
.catch((e)=>{
    // console.log(e)
    loader.style.visibility="hidden"
})
    }

}

    else{
        window.location='./index.html'
    }

    })
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
  