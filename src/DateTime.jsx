import React from 'react'



const DateTime = () => {
    const date = new Date().toLocaleDateString()
    const time=new Date().toLocaleTimeString()
    return (
        <>
        <h1>Hello My Name is Bishnu</h1>
        <p>Today's Date is : {date} </p>
        <p>Current time is : {time} </p>
        </>
  )
}

export default DateTime