import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          [s.link] + (isActive ? ` ${s.activeLink}` : '')
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          [s.link] + (isActive ? ` ${s.activeLink}` : '')
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
