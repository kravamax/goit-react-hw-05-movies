import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';

import * as moviesFetchAPI from '../services/movies-api';
import s from './Pages.module.css';
import { BsArrowLeftCircle } from 'react-icons/bs';
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
        <div className={s.moviePageContainer}>
          <Link to={backLinkHref}>
            <button className={s.buttonToBack}>
              <BsArrowLeftCircle /> Back
            </button>
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
          <ul className={s.additionalList}>
            <li className={s.additionalItem}>
              <NavLink
                to="cast"
                state={{ from: backLinkHref }}
                className={({ isActive }) =>
                  [s.additionalItemLink] + (isActive ? ` ${s.activeLink}` : '')
                }
              >
                Cast
              </NavLink>
            </li>
            <li className={s.additionalItem}>
              <NavLink
                to="reviews"
                state={{ from: backLinkHref }}
                className={({ isActive }) =>
                  [s.additionalItemLink] + (isActive ? ` ${s.activeLink}` : '')
                }
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<div>Load Additional information...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
