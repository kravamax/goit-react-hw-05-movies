import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './Pages.module.css';
import * as moviesFetchAPI from '../services/movies-api';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesFetchAPI
      .fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);

  const getReviewsList = () => {
    return (
      <ul>
        {reviews.map(
          ({ author, content, id, author_details: { avatar_path } }) => (
            <li key={id} className={s.reviewsContainer}>
              <div className={s.reviewsContainerLeft}>
                <img
                  src={
                    avatar_path.includes('www')
                      ? `${avatar_path.slice(1)}`
                      : `https://image.tmdb.org/t/p/w500${avatar_path}`
                  }
                  alt=""
                  width={100}
                />
                <p> {author}:</p>
              </div>

              <p className={s.reviewsContainerRight}>{content}</p>
            </li>
          )
        )}
      </ul>
    );
  };

  return (
    <div>{reviews.length ? getReviewsList() : <p>Reviews not found</p>}</div>
  );
};

export default ReviewsPage;
