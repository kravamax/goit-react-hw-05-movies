import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container';
import AppBar from './components/AppBar';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const CastPage = lazy(() => import('./pages/CastPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h2>Main Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path={'cast'} element={<CastPage />}></Route>
            <Route path={'reviews'} element={<ReviewsPage />}></Route>
          </Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
