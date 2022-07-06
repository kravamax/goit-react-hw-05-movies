import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as moviesFetchAPI from '../../services/movies-api';

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
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>{reviews.length ? getReviewsList() : <p>Reviews not found</p>}</div>
  );
};

export default ReviewsPage;
