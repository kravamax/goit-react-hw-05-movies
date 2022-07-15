import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Form = ({ query, onSearch }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(query);
  }, [query]);

  const onChangeInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSearch({ search: input });

    if (query === '') {
      alert('You have to write something');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        value={input || ''}
        onChange={onChangeInput}
      />
      <button type="submit">Search</button>
    </form>
  );
};

Form.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Form;
