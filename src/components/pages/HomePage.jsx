import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesFetchAPI from '../../services/movies-api';

const HomePage = () => {
  const [films, setFilms] = useState('');

  useEffect(() => {
    moviesFetchAPI.fetchTrendMovies().then(setFilms);
  }, []);

  const trendMoviesList = () => {
    return (
      <ul>
        {films.results.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title ? title : name}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return <div>{films && trendMoviesList()}</div>;
};

export default HomePage;
