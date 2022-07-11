import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChangeInput }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="search" onChange={onChangeInput} />
      <button type="submit">Search</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Form;
