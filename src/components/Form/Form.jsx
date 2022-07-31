import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import s from './Form.module.css';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

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

    if (query === '' || input === null) {
      toast.warn('You have to write something', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    toast.success(`Results for ${input}`, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        name="input"
        value={input || ''}
        onChange={onChangeInput}
        className={s.searchInput}
        placeholder="Enter movie name..."
      />
      <button type="submit" className={s.searchButton}>
        <BsSearch />
      </button>
    </form>
  );
};

Form.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Form;
