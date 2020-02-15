const register=(e)=>{
    e.preventDefault()

    const loader=document.getElementById('loader')
    loader.style.visibility="visible"

    const tellUser=document.getElementById('tellUser')

    const id=document.getElementById('uid').value
    const password=document.getElementById('password').value
    const firstname=document.getElementById('fname').value
    const lastname=document.getElementById('lname').value
    const email=document.getElementById('email').value
    const mobile=document.getElementById('mobile').value
    const registerInfo={
        SignupID:id,
        Password:password,
        Email:email,
        FirstName:firstname,
        LastName:lastname,
        PhoneNumber:mobile
    }

    // http://localhost:3000/users
    //
    fetch('http://34.242.25.204:3000/users',{
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
        // console.log(data)
        loader.style.visibility="hidden"
        tellUser.innerHTML=''
        const user_id=data.user._id
        window.localStorage.setItem('player_name',data.user.FirstName+' '+data.user.LastName)
        window.localStorage.setItem('player_id',data.user._id)
        window.location=`./questions.html`
    })
    .catch((e)=>{
        // console.log(e)
        loader.style.visibility="hidden"
        tellUser.innerHTML="Invalid User!!"
        // setTimeout(function(){
            // window.location='./register.html'
        // }, 2000);
})

}

document.getElementById('register').addEventListener('submit',register)


window.onload=()=>{
        if(window.localStorage.getItem('player_name') && window.localStorage.getItem('player_id')){
            window.location='./questions.html'
        }
    }