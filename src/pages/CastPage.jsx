import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './Pages.module.css';
import * as moviesFetchAPI from '../services/movies-api';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesFetchAPI.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  const getCastsList = () => {
    return (
      <ul className={s.castList}>
        <li className={s.castItem}>
          <p className={s.photoCell}>photo</p>
          <p className={s.nameCell}>name</p>
          <p className={s.characterCell}>role </p>
        </li>
        {cast.map(({ profile_path, name, character, id }) => (
          <li key={id} className={s.castItem}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://via.placeholder.com/150x225`
              }
              alt=""
              width={70}
              className={s.photoCell}
            />
            <p className={s.nameCell}>{name}</p>
            <p className={s.characterCell}>{character}</p>
          </li>
        ))}
      </ul>
    );
  };

  return <div>{cast ? getCastsList() : <div>Not found cast</div>}</div>;
};

export default CastPage;
