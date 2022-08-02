import { lazy } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';
const MovieRating = lazy(() => import('../MovieRating/MovieRating'));

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={s.list}>
        {movies.map(({ title, name, id, poster_path, vote_average }) => (
          <li key={id} className={s.item}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://via.placeholder.com/150x225`
                }
                className={s.filmPoster}
                alt=""
                width={250}
                height={375}
              />
              <div className={s.filmTitle}>{title ? title : name}</div>
              <MovieRating rating={vote_average} />
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;
