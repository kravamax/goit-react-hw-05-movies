const Form = ({ onSubmit, onChangeInput }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChangeInput} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
