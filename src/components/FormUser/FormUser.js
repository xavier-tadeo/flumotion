import PropType from "prop-types";

export const FormUser = ({
  handleSubmit,
  setInputValue,
  inputValue,
  isDisable,
  setIsDisable,
}) => {
  const handleChange = (evt) => {
    setInputValue({
      ...inputValue,
      [evt.target.id]: evt.target.value,
    });
    checkForm();
  };

  const checkForm = () => {
    if (inputValue.author && inputValue.title) {
      setIsDisable(false);
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <form className="container-form row" onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-label text-center p-2 display-6">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form-control text-center"
          placeholder="Type to search title"
          value={inputValue.title}
          onChange={handleChange}
        />
        <label
          htmlFor="author"
          className="form-label text-center p-2 display-6 mt-3"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          className="form-control text-center"
          placeholder="Type to search author"
          value={inputValue.author}
          onChange={handleChange}
        />
        <div className="d-grid gap-2 col-4 mx-auto">
          <button className="btn btn-success mt-4 btn-sm" disabled={isDisable}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

FormUser.propType = {
  handleSubmit: PropType.func.isRequired,
  setInputValue: PropType.func.isRequired,
  inputValue: PropType.object.isRequired,
  isDisable: PropType.bool.isRequired,
  setIsDisable: PropType.func.isRequired,
};
