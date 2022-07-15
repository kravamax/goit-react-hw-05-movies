import PropTypes from 'prop-types';
import s from './MovieDetails.module.css';

const MovieDetailsInfo = ({
  poster_path,
  title,
  name,
  release_date,
  vote_average,
  overview,
  getGenresList,
}) => {
  return (
    <div className={s.flex}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://via.placeholder.com/250x375`
        }
        alt={title}
        width={250}
        height={375}
      />
      <div className={s.infoBlock}>
        <h2>
          {title ? title : name} {release_date()}
        </h2>
        <div>User score: {vote_average * 10}% </div>
        <h3>Overview</h3>
        <div>{overview}</div>
        <h3>Genres</h3>
        <div>{getGenresList()}</div>
      </div>
    </div>
  );
};

MovieDetailsInfo.propTypes = {
  poster_path: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.func.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  getGenresList: PropTypes.func.isRequired,
};

export default MovieDetailsInfo;
