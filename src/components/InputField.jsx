const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit} style={{ cursor: "pointer" }}>
        Add Todo
      </button>
    </label>
  );
};

export default InputField;
