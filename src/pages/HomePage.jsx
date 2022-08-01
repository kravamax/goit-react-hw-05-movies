import { useState, useEffect, lazy, Suspense } from 'react';
import * as moviesFetchAPI from '../services/movies-api';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
const MoviesList = lazy(() => import('../components/MoviesList'));

const HomePage = () => {
  const [films, setFilms] = useState('');

  useEffect(() => {
    moviesFetchAPI.fetchTrendMovies().then(({ results }) => setFilms(results));
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Oval
              height={80}
              width={80}
              color="black"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="grey"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        }
      >
        {films && <MoviesList movies={films} />}
      </Suspense>
    </>
  );
};

export default HomePage;
