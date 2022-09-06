import React, { useState, useEffect } from 'react'

const Useeffect = () => {

    const [text, setText] = useState(0);

    useEffect(() => {
        
        document.title = `${text} new messsages`
        
    },[text]);

   
  return (
    <div className='maindiv'>
      <div>
        <h1>Use Effect</h1>
        <h2>{text}</h2>
        <button onClick={() => setText(text + 1)}>Increase count</button>
      </div>
    </div>
  )
}

export default Useeffect
