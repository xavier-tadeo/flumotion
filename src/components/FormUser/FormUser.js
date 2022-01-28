import React from "react";

export const FormUser = () => {
  return (
    <div className="d-flex justify-content-center">
      <form className="container row">
        <label htmlFor="title" className="form-label text-center p-2 display-6">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form-control text-center"
          placeholder="Type to search..."
        />
        <label
          htmlFor="author"
          className="form-label text-center p-2 display-6 mt-3"
        >
          Author
        </label>
        <input
          type="text"
          id="title"
          className="form-control text-center"
          placeholder="Type to search..."
        />
      </form>
    </div>
  );
};
