import React, { useState } from "react";

const Form = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function sendData(e){
        e.preventDefault()
        console.log('send data')
        console.log(email,password)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        };
        fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
    }
        
        return (
        <div>
            <h1>Login</h1>
            <form className="w-50 mx-auto" onSubmit={sendData}>
                <div className="col-auto mb-4">
                    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="staticEmail2" placeholder="email@example.com"/>
                </div>
                <div className="col-auto mb-4">
                    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="inputPassword2" placeholder="Password"/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Form