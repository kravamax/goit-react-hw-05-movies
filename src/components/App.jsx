import { Route, Routes } from 'react-router-dom';

import Container from './Container/';
import AppBar from './AppBar';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import CastPage from './pages/CastPage';
import ReviewsPage from './pages/ReviewsPage';

const App = () => {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path={'cast'} element={<CastPage />}></Route>
          <Route path={'reviews'} element={<ReviewsPage />}></Route>
        </Route>

        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
