import React, { useState } from 'react'

const Singleinput = () => {

    const [username, setUserName] = useState('')
    const [useremail, setUserEmail] = useState('')
    const [userpassword, setUserPassword] = useState('')
    const [people, setPeople] = useState([])



    const submitForm = () => {
     
      if(username && useremail){

        const person = { username, useremail, id:Math.random() };

        setPeople((people) => {
          return [...people, person]
        });
        setUserEmail('')
        setUserName('')
        setUserPassword('')
      }
    }

  return (
    <div className="maindiv">
      <div>
        <h1>Single Inputs</h1>
        <div>
          <input
            type="text"
            name=""
            placeholder="Enter your name"
            id=""
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <input 
          type="text" 
          name="" 
          placeholder="Enter your email" 
          id="" 
          value={useremail}
          onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>

        <div>
          <input 
          type="text" 
          name="" 
          placeholder="Enter your password" 
          id="" 
          value={userpassword}
          onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>

        <div>
          <button onClick={submitForm}>SUBMIT</button>
        </div>
      {
        people.map((person) => {
          return (
            <div key={person.id}>
              <h4>{person.username}</h4>
              <h4>{person.useremail}</h4>
            </div>
          )
        })
      }
 
      </div>
    </div>
  );
}

export default Singleinput
