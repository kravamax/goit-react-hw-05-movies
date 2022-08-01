import { useState, useEffect, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as moviesFetchAPI from '../services/movies-api';
import Form from '../components/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
const MoviesList = lazy(() => import('../components/MoviesList'));

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useSearchParams();
  const query = search.get('search');

  useEffect(() => {
    if (query === null) return;

    moviesFetchAPI.fetchMoviesQuery(query).then(({ results }) => {
      if (!results.length) {
        return toast.error('Not found anything :(', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
      setMovies(results);
    });
  }, [query]);

  return (
    <>
      <Form query={query} onSearch={setSearch} />
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
        {movies && <MoviesList movies={movies} />}
      </Suspense>
    </>
  );
};

export default MoviesPage;
