import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import * as moviesFetchAPI from '../../services/movies-api';
import Form from '../Form';
const MoviesList = lazy(() => import('../MoviesList'));

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('search');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (queryName === null) return;

    moviesFetchAPI.fetchMoviesQuery(queryName).then(({ results }) => {
      if (!results.length) {
        return alert('Not found anything :(');
      }
      setMovies(results);
    });
  }, [queryName]);

  const onSubmit = event => {
    event.preventDefault();

    if (queryName === event.target.search.value) {
      return;
    }
    if (query === '') {
      alert('You have to write something');
      return;
    }

    navigate({ ...location, search: `search=${query}` });

    setQuery('');
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        onChangeInput={event => setQuery(event.target.value)}
      />
      <Suspense fallback={<h2>Loading movies...</h2>}>
        {movies && <MoviesList movies={movies} />}
      </Suspense>
    </>
  );
};

export default MoviesPage;
