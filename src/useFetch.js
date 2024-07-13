import { useEffect, useState } from 'react'

const useFetch = (url) => {
  
  const [data, setData] = useState();
  const [isLoanding, setIsLoanding] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      
      fetch(url, {signal: abortCont.signal})
      .then((res) => {
        if(!res.ok) {
          throw Error('NotFetching');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoanding(false);
      })
      .catch((err) => {
        if(err.name === 'AbortError') {
          console.log('cleaned');
        } else {
          setError(err.massage);
          setIsLoanding(false);
        }
      })

    }, 1000);

    return () => abortCont.abort();

  }, [url])

  return {data, isLoanding, error}

}

export default useFetch