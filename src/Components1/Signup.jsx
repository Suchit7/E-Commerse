import React, { useRef } from 'react'

function Signup() {

    let name = useRef();
    let email = useRef(); 
    let password = useRef(); 


    let submitbtn=(e)=>{
        e.preventDefault()

        let newUser={
            Username: name.current.value,
            Email: email.current.value,
            Password: password.current.value
        }
        fetch("http://localhost:4050/users",{method:"POST",
                                            headers:{"Content-Type":"application/json"},
                                            body:JSON.stringify(newUser)
                                        })
        .then(()=>{
            alert("data added")
            window.location.reload();
        })

    }   

  return (
    <section id="login">
        <article>
            <main>
                <form onSubmit={submitbtn}>
                <label htmlFor="">User Name:</label> <input ref={name} type="text" /><br /><br />
                <label htmlFor="">Email:</label> <input ref={email} type="text" /><br /><br />
                <label htmlFor="">Password:</label> <input ref={password} type="Password" /><br /><br />
                <label htmlFor="">Confirm Password:</label> <input type="password" /><br /><br />
                <input type="submit" />
                    
                </form>
            </main>
        </article>
    </section>
  )
}

export default Signup
