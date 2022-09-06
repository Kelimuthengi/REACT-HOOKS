import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useFetch } from './customhooks/Usefetch';
const url = "https://api.github.com/users";
const Person = () => {

    // const param = useParams();
    // console.log(param.id);
    const [username,  setUsername] = useState('')
    const [imageUrl,  setImgUrl] = useState('')
    const { id } = useParams();
    
    const { loading , people} = useFetch(url);

 

  return (
    <div className="maindiv">
      <div>
        <h1>Personal Details</h1>
        {loading && <h2>Loading...</h2>}
        
      </div>
    </div>
  );
}

export default Person
