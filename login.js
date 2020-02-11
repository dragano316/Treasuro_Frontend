const login=(e)=>{
    e.preventDefault()
    // console.log('yes')

    const id=document.getElementById('uid').value
    const password=document.getElementById('password').value

    console.log(id)
    console.log(password)

    const loginInfo={
        SignupID:id,
        Password:password
    }
    fetch(`http://localhost:3000/users/login`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(loginInfo)
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

        if(data.ans==="Freeze"){
            alert('You have Completed the game!! If you want to play again Please buy a new ticket.')
        }
        else{
        const user_id=data.user._id
        window.localStorage.setItem('name',data.user.FirstName+' '+data.user.LastName)
        window.localStorage.setItem('player_id',data.user._id)
        if(data.user.freeze===true){
            alert('You have reached maximum limit. Please buy a new ticket.')
            window.localStorage.clear()
            window.location='./index.html'
        }
        else{
        window.location=`./questions.html?user=${user_id}`
        }
    }
    })
    .catch((e)=>alert('Please Enter Valid Credentials!'))


}


document.getElementById('login').addEventListener('submit',login)