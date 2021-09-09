import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
function Register() {
    useEffect(() => {
        if (localStorage.getItem('userinfo')) {
            history.push('/add')
        }
    })

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const history = useHistory();
    async function signUp() {
        let item = { name, email, password, phone, dob, gender };

        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        result = await result.json();
        localStorage.setItem("userinfo", JSON.stringify(result))
        history.push('/add')
    }
    return (
        <>
        <Header />
        <div className="container">
            <h1>Register Page</h1>
            <div className="card">
                <div className="card-body text-left">
                    <label>Full Name</label>
                    <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="name" /><br />
                    <label>E-mail</label>
                    <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="E-mail" /><br />
                    <label>Password</label>
                    <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" /><br />
                    <label>Phone</label>
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="01XXXXXXXXX" /><br />
                    <label>Date of Birth</label>
                    <input type="date" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} className="form-control" placeholder="DOB" />
                    <div className="row">
                        <div className="col-sm-6"><input type="radio" value={gender} onChange={(e) => setGender(e.target.value)} name="gender" value="male" />Male</div>
                        <div className="col-sm-6"><input type="radio" value={gender} onChange={(e) => setGender(e.target.value)} name="gender" value="female" />Female</div>
                    </div>
                    <button className="btn btn-primary" onClick={signUp}> Register </button>
                </div>
            </div>

        </div>
        </>
    );

}
export default Register