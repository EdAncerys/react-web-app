import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Medium() {
  const [mediumArticles, setMediumArticles] = useState();
  const [axiosError, setAxiosError] = useState();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(({ data }) => {
        console.log(data);
        setMediumArticles(data);
      })
      .catch(handleErrors);
  }, []);

  function handleErrors(err) {
    if (err.response) {
      const error = 2;
      setAxiosError('Problem With Response ' + err.response.status);
      console.log('Problem With Response ', err.response.status);
    } else if (err.request) {
      setAxiosError('Problem With Request!');
      console.log('Problem With Request!');
    } else {
      setAxiosError('Error' + err.message);
      console.log('Error', err.message);
    }
    console.log(axiosError, 4);
  }

  return (
    <div>
      <h1>Medium Articles</h1>
      {axiosError}
    </div>
  );
}
