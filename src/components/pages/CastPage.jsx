import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as moviesFetchAPI from '../../services/movies-api';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesFetchAPI.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  const getCastsList = () => {
    return (
      <ul>
        {cast.map(({ profile_path, name, character, id }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `https://via.placeholder.com/150x225`
              }
              alt=""
              width={150}
            />
            <p>name: {name}</p>
            <p>character: {character}</p>
          </li>
        ))}
      </ul>
    );
  };

  return <div>{cast ? getCastsList() : <div>Not found cast</div>}</div>;
};

export default CastPage;
