import React, { useState, useEffect } from 'react'

const Useeeffectcleanup = () => {

    const [screenWidth, setScreenwidth] = useState(window.innerWidth);


    const setWidth = () => {
        setScreenwidth(window.innerWidth);
    }

    useEffect(() => {
        console.log("hello world");
        window.addEventListener("resize", setWidth);

        return () => {
            window.removeEventListener("resize", setWidth);
        }
        
    }, [])

  return (
    <div className='maindiv'>
      <div>
        <h1>Use effect clean up!</h1>
        <h3>{screenWidth}: px</h3>
      </div>
    </div>
  )
}

export default Useeeffectcleanup
