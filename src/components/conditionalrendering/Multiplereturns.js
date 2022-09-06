import {useEffect, useState} from 'react'

const Multiplereturns = () => {

  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(false);
  const [user, setUser] = useState('');


  const url = "https://api.github.com/users";

  const fetchUsers = () => {

    fetch(url)
    .then((response) => {

      if(response.status >= 200 && response.status <= 299){
        return response.json();
      }
      else {
        setLoading(false);
        setEror(true);
        throw new Error(response.statusText)
      }
    })
    .then((people) => {

      const newPerson = people.map((person) => {
        const { id, login  } = person
        return (
          <div key={id}>
            <h6>{login}</h6>
          </div>
        );
      })

      setTimeout(() => {

        setLoading(false)
        setUser(newPerson)
      }, 2000)
    })
  }

  useEffect(() => {
    fetchUsers();
  }, [])
  return (
    <div className='maindiv'>
      <div>
        <h1>Multiple Returns</h1>

        {
          loading && <h2>Loading data...</h2>
        }

        {
          error && <h2>There is an error...</h2>
        }

        {
          user &&  <h2>{user}</h2> 
        }
      </div>
    </div>
  )
}

export default Multiplereturns
