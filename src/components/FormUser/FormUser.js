import { useUserForm } from "../../hooks/useUserForm";

export const FormUser = () => {
  const { handleChange, inputValue, initialValue, setInputValue } =
    useUserForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setInputValue(initialValue);
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
          placeholder="Type to search..."
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
          placeholder="Type to search..."
          value={inputValue.author}
          onChange={handleChange}
        />
        <div className="d-grid gap-2 col-4 mx-auto">
          <button className="btn btn-success mt-4 btn-sm ">Add</button>
        </div>
      </form>
    </div>
  );
};
