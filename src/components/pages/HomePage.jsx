import { useState, useEffect, lazy, Suspense } from 'react';
import * as moviesFetchAPI from '../../services/movies-api';
const MoviesList = lazy(() => import('../MoviesList'));

const HomePage = () => {
  const [films, setFilms] = useState('');

  useEffect(() => {
    moviesFetchAPI.fetchTrendMovies().then(({ results }) => setFilms(results));
  }, []);

  return (
    <>
      <Suspense fallback={<h2>Loading movies...</h2>}>
        {films && <MoviesList movies={films} />}
      </Suspense>
    </>
  );
};

export default HomePage;
