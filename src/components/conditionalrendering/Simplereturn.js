import React, { useState, useEffect } from 'react'

const Simplereturn = () => {

  const [text, setText] = useState(false);

  
  return (
    <div className='maindiv'>
      <div>
        <h1>Conditional rendering</h1>

      {
        text ? <Item/> : <h2>There is no item</h2>
      }
      <button onClick={() => setText(!text)}>change state</button>
      </div>
    </div>
  )
}

const Item = () => {
  const [screenWidth, setScreenwidth] = useState(window.innerWidth);

  const setWidth = () => {
    setScreenwidth(window.innerWidth);
  };

  useEffect(() => {
    
    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  return (
    <div>
      <h1>Screen with</h1>
      <h2>{screenWidth}: px</h2>
    </div>
  );

}

export default Simplereturn
