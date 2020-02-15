const login=(e)=>{
    e.preventDefault()

    const loader=document.getElementById('loader')
    loader.style.visibility="visible"
    // console.log(loader)


    const tellUser=document.getElementById('tellUser')
    // console.log('yes')

    const id=document.getElementById('uid').value
    const password=document.getElementById('password').value

    // console.log(id)
    // console.log(password)

    const loginInfo={
        SignupID:id,
        Password:password
    }
    fetch(`http://34.242.25.204:3000/users/login`,{
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
        // console.log(data)
        loader.style.visibility="hidden"

        if(data.ans==="Freeze"){
            alert('You have Completed the game!! If you want to play again Please buy a new ticket.')
        }
        else{

        const user_id=data.user._id
        window.localStorage.setItem('player_name',data.user.FirstName+' '+data.user.LastName)
        window.localStorage.setItem('player_id',data.user._id)
        if(data.user.freeze===true){
            alert('You have reached maximum limit. Please buy a new ticket.')
            window.localStorage.clear()
            window.location='./index.html'
        }
        else{
            // tellUser.innerHTML="You are SuccessFully LoggedIn!!"

            // if(loader.style.visibility==="hidden"){
                // setTimeout(function(){
                    window.location=`./questions.html`
                // }, 2000);
        // }
        }
    }
    })
    .catch((e)=>{
        loader.style.visibility="hidden"
        tellUser.innerHTML="Invalid Credentials!!"
        setTimeout(function(){
            window.location='./login.html'
        }, 2000);

        // alert('Please Enter Valid Credentials!')
    })


}


document.getElementById('login').addEventListener('submit',login)





document.getElementById('gotoregister').addEventListener('click',()=>{
    window.location='./register.html'
})


window.onload=()=>{
    if(window.localStorage.getItem('player_name') && window.localStorage.getItem('player_id')){
        window.location='./questions.html'
    }
}