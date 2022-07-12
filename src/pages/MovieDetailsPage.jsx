import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';

import * as moviesFetchAPI from '../services/movies-api';

const MovieDetailsInfo = lazy(() => import('../components/MovieDetailsInfo'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const {
    title,
    name,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    moviesFetchAPI.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const getGenresList = () => {
    if (!movie) return;

    return genres.map(genre => genre.name).join(', ');
  };

  const getReleaseYear = () => {
    return release_date ? `(${release_date.slice(0, 4)})` : '(Upcoming)';
  };

  return (
    <>
      {movie && (
        <>
          <Link to={backLinkHref}>
            <button style={{ marginTop: '10px' }}>⬅️ Back</button>
          </Link>
          <MovieDetailsInfo
            poster_path={poster_path}
            title={title}
            name={name}
            release_date={() => getReleaseYear()}
            vote_average={vote_average}
            overview={overview}
            getGenresList={() => getGenresList()}
          />
          <hr />
          <div>Additional information: </div>
          <ul>
            <li>
              <Link to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
            </li>
            <li>
              <NavLink to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<div>Load Additional information...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
