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
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        width={250}
      />
      <div className={s.infoBlock}>
        <h2>
          {title ? title : name} ({release_date})
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

export default MovieDetailsInfo;
