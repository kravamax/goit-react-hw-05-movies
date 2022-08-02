import s from './MovieRating.module.css';
import { FcRating } from 'react-icons/fc';

const MovieRating = ({ rating }) => {
  return (
    <span className={s.filmRating}>
      <FcRating /> {rating > 0 ? rating.toFixed(1) : 'No rating'}
    </span>
  );
};

export default MovieRating;
