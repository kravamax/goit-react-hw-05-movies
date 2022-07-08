import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, name, id }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>{title ? title : name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
