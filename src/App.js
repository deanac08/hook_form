
import './App.css';
import React, {useState} from 'react';

function App() {
  
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setconfirmPass] = useState("")

    const changeEmail = (e) => {
      console.log(e.target.value);
      setEmail(e.target.value)
    }

    const changeFirstName = (e) => {
      console.log(e.target.value);
      setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
      console.log(e.target.value);
      setLastName(e.target.value)
    }

  return (
    <div className="App">
      <form>
        <p>
          <label> First Name:</label>
          <input type="text" onChange={changeFirstName} value={firstName}/>
        </p>
        <p>
          <label> Last Name:</label>
          <input type="text" onChange= {changeLastName} value={lastName}/>
        </p>
        <p>
          <label> Email:</label>
          <input type="text" value={email} onChange={changeEmail}/>
        </p>
        <p>
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </p>
        <p>
          <label>Confirm Password:</label>
          <input type="password" onChange = {(e) => setconfirmPass(e.target.value)} value={confirmPass}/>
        </p>
      </form>
      <hr />
      Your Form Data <br/>
      First Name: {firstName} <br/>
      Last Name: {lastName} <br/>
      Email: {email} <br/>
      Password: {password} <br/>
      Confirm Password: {confirmPass} <br/>
    </div>
  );
}

export default App;
