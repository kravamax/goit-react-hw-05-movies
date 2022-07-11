import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';

import * as moviesFetchAPI from '../../services/movies-api';

const MovieDetailsInfo = lazy(() => import('../MovieDetailsInfo'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const { title, name, poster_path, vote_average, overview, genres } = movie;
  let { release_date } = movie;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  if (release_date) {
    release_date = release_date.slice(0, 4);
  }

  useEffect(() => {
    moviesFetchAPI.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const getGenresList = () => {
    if (!movie) return;

    return genres.map(genre => genre.name).join(', ');
  };

  return (
    <>
      {movie && (
        <>
          <Link to={backLinkHref}>Back to products</Link>
          <MovieDetailsInfo
            poster_path={poster_path}
            title={title}
            name={name}
            release_date={release_date}
            vote_average={vote_average}
            overview={overview}
            getGenresList={() => getGenresList()}
          />
          <hr />
          <div>Additional information: </div>
          <ul>
            <li>
              <NavLink to={`cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`reviews`}>Reviews</NavLink>
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
