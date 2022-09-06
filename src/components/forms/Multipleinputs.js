import React, { useState } from 'react'

const Multipleinputs = () => {

    const [person, setPerson ] = useState({username:'', useremail:'', userpassword:''})
    const [people, setPeople] = useState([]);

    
    const getInputValue = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        
        setPerson({...person,[name]:value})
        
    }

    const addPerson = (e) => {
        e.preventDefault();

        if(person.username && person.useremail){
            // const {username, useremail } = person
            const newPerson = {...person, id:Math.random() }

            // setPeople((people) => {
            //     return [...people, newPerson];
            // })
            setPeople([...people, newPerson])
        }

        setPerson({username:'', userpassword:'', useremail:''})
    }

    const removePerson = (id) => {
      
      setPeople((people) => {

        const fliteredPeople = people.filter((person) => person.id !== id);
        return fliteredPeople;
      })
    }
   
  return (
    <div className="maindiv">
      <div>
        <h1>Multiple inputs</h1>
        <form onSubmit={addPerson}>
          <div>
            <input
              type="text"
              value={person.username}
              name="username"
              placeholder="Entername"
              id="username"
              onChange={getInputValue}
            />
          </div>

          <div>
            <input
              type="email"
              value={person.useremail}
              name="useremail"
              placeholder="Enter email"
              id="useremail"
              onChange={getInputValue}
            />
          </div>

          <div>
            <input
              type="password"
              value={person.userpassword}
              name="userpassword"
              placeholder="Enter password"
              id="userpassword"
              onChange={getInputValue}
            />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>

        {people.map((person) => {
          return (
            <div key={person.id}>
              <h4>{person.username}</h4>
              <h4>{person.useremail}</h4>
              <button onClick={() => removePerson(person.id)}>remove</button>
            </div>
          );
        })}

        <button onClick={() => setPeople([])}>clear people</button>
      </div>
    </div>
  );
}

export default Multipleinputs
