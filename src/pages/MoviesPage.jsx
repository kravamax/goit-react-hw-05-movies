import { useState, useEffect, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as moviesFetchAPI from '../services/movies-api';
import Form from '../components/Form';
const MoviesList = lazy(() => import('../components/MoviesList'));

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useSearchParams();
  const query = search.get('search');

  useEffect(() => {
    if (query === null) return;

    moviesFetchAPI.fetchMoviesQuery(query).then(({ results }) => {
      if (!results.length) {
        return alert('Not found anything :(');
      }
      setMovies(results);
    });
  }, [query]);

  return (
    <>
      <Form query={query} onSearch={setSearch} />
      <Suspense fallback={<h2>Loading movies...</h2>}>
        {movies && <MoviesList movies={movies} />}
      </Suspense>
    </>
  );
};

export default MoviesPage;
