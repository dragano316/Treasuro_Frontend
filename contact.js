const contact=(e)=>{
    e.preventDefault()
    // console.log('yes')

    const comment=document.getElementById('comment').value

    const contactInfo={
        comment
    }

    fetch('http://localhost:3000/contact',{
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
        alert('You have Successfully Submitted your Query!!')
        window.location='./index.html'
        

        // location.href='./questions.html'
    })
    .catch((e)=>alert('Please Try Again!!'))


}


document.getElementById('contact').addEventListener('submit',contact)