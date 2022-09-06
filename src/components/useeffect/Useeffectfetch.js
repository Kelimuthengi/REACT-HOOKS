import React, { useState, useEffect} from 'react'

const Useeffectfetch = () => {

    const [people, setPeople] = useState([]);
    console.log(people);
    const url = 'https://api.github.com/users';


    useEffect(() => {

    const getData = async () => {

        const response = await fetch(url);
        const data = await response.json();
        setPeople(data)
    }
    getData();
    }, [url]);


  return (
    <div className='maindiv'>
      <div>
        <h1>Usefect Fetch Data</h1>
        {
            people.map((person) => {
                // return (
                //   <div key={person.id}>
                //     <h4>{person.login}</h4>
                //     <img src={person.avatar_url} height="100px" alt="" />
                //   </div>
                // );
                return <Newperson key={person.id} {...person}/>
            })
        }
      </div>
    </div>
  )
}


const Newperson = ({ login, avatar_url }) => {
//   console.log(data);
//   const { login, avatar_url } = data.person;
  return (
    <div>
      <h4>{login}</h4>
      <img src={avatar_url} height="100px" alt="" />
    </div>
  );
};




export default Useeffectfetch
