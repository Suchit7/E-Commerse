import React, { useEffect, useState } from 'react'

function Display() {

    let [student,setStudent] =useState("")
    useEffect(()=>{
        fetch("http://localhost:4050/users")
        .then((res)=>{return JSON.stringify(res) })
        .then((data)=>{setStudent(data)})

    })

    // console.log('haii')


  return (


    <div>
    hai
    {student.map((stu)=>{
      return <div>
    
        <h1>Name : {stu.Username}</h1>
        <h1>email : {stu.Email}</h1>
        <h1>password : {stu.Password}</h1>
      </div>


    })
    
    }
       
    </div>
  )
}

export default Display
