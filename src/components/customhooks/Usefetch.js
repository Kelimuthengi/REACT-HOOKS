import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  const getPeople = async () => {

    const response = await fetch(url);
    const data = await response.json();

    setTimeout(() => {
      setLoading(false);
      setPeople(data)
    }, 2000);
  }

  useEffect(() => {
    getPeople();
  },[url])
  return { loading , people}
}

