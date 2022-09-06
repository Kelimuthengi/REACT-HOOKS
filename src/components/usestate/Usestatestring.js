import React, { useState } from 'react'

const Usestatestring = () => {

    const [town, setTown] = useState("");

    const changState = () => {
        // setText('keli')
        if (town === "") {
          setTown("keli");
        } else {
          setTown("");
        }
    }
   
  return (
    <div className="maindiv">
      <div>
        <h1>Use state Basics</h1>
        <h4>{town}</h4>
        <button onClick={changState}>change state</button>
      </div>
    </div>
  );
}

export default Usestatestring
