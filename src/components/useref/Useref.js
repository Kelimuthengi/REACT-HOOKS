import React, { useRef } from "react";

const Useref = () => {

    const username = useRef(null)
    const useremail = useRef(null)

    const submitForm = () => {

        console.log(username.current.value);
        console.log(useremail.current.value);
    }

  return (
    <div className="maindiv">
      <div>
        <h1>Use Ref</h1>
        <div>
          <input type="text" name="" placeholder="Enter your name" id="" ref={username} />
        </div>

        <div>
          <input type="text" name="" placeholder="Enter your email" id="" ref={useremail}/>
        </div>

        <div>
          <button onClick={submitForm}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Useref;
