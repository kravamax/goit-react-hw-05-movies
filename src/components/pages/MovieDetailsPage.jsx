import { NavLink, useParams, Route, Routes, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CastPage from './CastPage';
import ReviewsPage from './ReviewsPage';

import * as moviesFetchAPI from '../../services/movies-api';
import MovieDetailsInfo from '../MovieDetailsInfo';

const MovieDetailsPage = () => {
  const { movieId } = useParams(null);
  const [movie, setMovie] = useState('');
  const { title, name, poster_path, vote_average, overview, genres } = movie;
  let { release_date } = movie;

  if (release_date) {
    release_date = release_date.slice(0, 4);
  }

  useEffect(() => {
    if (movieId === null) return;

    moviesFetchAPI.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const getGenresList = () => {
    if (!movie) return;

    return genres.map(genre => genre.name).join(', ');
  };

  return (
    <>
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
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />

      <Routes>
        <Route path={`/movies/:${movieId}/cast`} element={<CastPage />}></Route>
        <Route
          path={`/movies/:${movieId}/reviews`}
          element={<ReviewsPage />}
        ></Route>
      </Routes>
    </>
  );
};

export default MovieDetailsPage;
