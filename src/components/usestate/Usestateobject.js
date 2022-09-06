import React, { useState } from 'react'

const Usestateobject = () => {

    const changeState = () => {
        // setPerson({name:'Hefe'});
        setPerson({...person, name:'Hefe'})
    }

    const [person, setPerson ] = useState({
        name:'keli',
        age:40,
        gender:'male'
    })
  return (
    <div className='maindiv'>
      <div>
        <h1>Use state objects</h1>
        <h4>{person.name}</h4>
        <h4>{person.age}</h4>
        <h4>{person.gender}</h4>
        <button onClick={changeState}>change state</button>
      </div>
    </div>
  )
}

export default Usestateobject
