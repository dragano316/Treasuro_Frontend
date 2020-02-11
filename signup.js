const register=(e)=>{
    e.preventDefault()
    // console.log('yes')

    const id=document.getElementById('uid').value
    const password=document.getElementById('password').value
    const firstname=document.getElementById('fname').value
    const lastname=document.getElementById('lname').value
    const email=document.getElementById('email').value

    console.log(id)
    console.log(password)

    const registerInfo={
        SignupID:id,
        Password:password,
        Email:email,
        FirstName:firstname,
        LastName:lastname
    }

    fetch('http://localhost:3000/users',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(registerInfo)
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
        const user_id=data.user._id
        window.localStorage.setItem('name',data.user.FirstName+' '+data.user.LastName)
        window.localStorage.setItem('player_id',data.user._id)
        window.location=`./questions.html?user=${user_id}`
    })
    .catch((e)=>{alert('User Exists')
    window.location='./register.html'
})


}


document.getElementById('register').addEventListener('submit',register)