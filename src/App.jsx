import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container';
import AppBar from './components/AppBar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Oval } from 'react-loader-spinner';

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
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Oval
              height={80}
              width={80}
              color="black"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="grey"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        }
      >
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
      <ToastContainer />
    </Container>
  );
};

export default App;
