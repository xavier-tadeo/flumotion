import { render, screen } from "@testing-library/react";
import { FormUser } from "./FormUser";

describe("Given a Form component", () => {
  const handleSubmit = jest.fn();
  const inputValue = {
    author: "Extremo",
    title: "Extremo Duro",
  };
  const isDisable = true;
  const setInputValue = jest.fn();
  const setIsDisable = jest.fn();

  describe("When it render", () => {
    test("Then should a rendered a two inputs two label and one button", () => {
      render(
        <FormUser
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          isDisable={isDisable}
          setInputValue={setInputValue}
          setIsDisable={setIsDisable}
        />
      );

      const title = screen.getByLabelText("Title");
      const author = screen.getByLabelText("Author");
      const addButton = screen.getByRole("button");

      expect(title).toBeInTheDocument();
      expect(author).toBeInTheDocument();
      expect(addButton).toBeInTheDocument();
    });
  });
  describe("When the user type in inputs", () => {
    test("Then it should change a value", () => {
      render(
        <FormUser
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          isDisable={isDisable}
          setInputValue={setInputValue}
          setIsDisable={setIsDisable}
        />
      );

      expect(screen.getByRole("textbox", { name: "Title" })).toHaveValue(
        "Extremo Duro"
      );
      expect(screen.getByRole("textbox", { name: "Author" })).toHaveValue(
        "Extremo"
      );
    });
  });
});
