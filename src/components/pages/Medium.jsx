import React, { useState, useEffect } from 'react';
import MediumArticle from '../content/Articles/MediumAricleComponent';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function Medium(props) {
  const [mediumArticles, setMediumArticles] = useState();
  const [axiosError, setAxiosError] = useState();

  useEffect(() => {
    axios
      .get(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lookatemail'
      )
      .then(({ data }) => {
        setMediumArticles(data.items);
      })
      .catch(handleErrors);
  }, []);

  function handleErrors(err) {
    if (err.response) {
      setAxiosError('Problem With Response ' + err.response.status);
      console.log('Problem With Response ', err.response.status);
    } else if (err.request) {
      setAxiosError('Problem With Request!');
      console.log('Problem With Request!');
    } else {
      setAxiosError('Error' + err.message);
      console.log('Error', err.message);
    }
  }

  return mediumArticles ? (
    <div className="medium-page">
      <h3 className="titleName">
        {props.selectedArticleId ? '' : 'Medium Articles'}
      </h3>
      {mediumArticles.map((article) => (
        <MediumArticle
          key={uuidv4()}
          id={new Date(article.pubDate).valueOf()}
          article={article}
          selectedArticle={props.selectedArticle}
          selectedArticleId={props.selectedArticleId}
        />
      ))}
    </div>
  ) : (
    <React.Fragment>{axiosError ? axiosError : 'Loading'}</React.Fragment>
  );
}
