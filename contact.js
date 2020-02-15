const contact=(e)=>{

    e.preventDefault()

    const loader=document.getElementById('loader')
    loader.style.visibility="visible"
    // console.log(loader)


    const comment=document.getElementById('comment').value

    const contactInfo={
        comment
    }

    fetch('http://34.242.25.204:3000/contact',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(contactInfo)
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
        alert('You have Successfully Submitted your Query!!')
        window.location='./index.html'
        // location.href='./questions.html'
    })
    .catch((e)=>{
        loader.style.visibility="hidden"
        alert('Please Try Again!!')
    })


}


document.getElementById('contact').addEventListener('submit',contact)