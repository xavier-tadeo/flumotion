import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormUser } from "./FormUser";

describe("Given a Form component", () => {
  describe("When it render", () => {
    test("Then should a rendered a two inputs two label and one button", () => {
      const handleSubmit = jest.fn();
      const inputValue = {
        author: "Extremo",
        title: "Extremo Duro",
      };
      const isDisable = true;
      const setInputValue = jest.fn();
      const setIsDisable = jest.fn();

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

  describe("When the user no type in inputs the button", () => {
    test("Then it should disable", () => {
      const handleSubmit = jest.fn();
      const inputValue = {};
      const isDisable = true;
      const setInputValue = jest.fn();
      const setIsDisable = jest.fn();

      render(
        <FormUser
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          isDisable={isDisable}
          setInputValue={setInputValue}
          setIsDisable={setIsDisable}
        />
      );
      const buttonAdd = screen.getByText("Add");
      userEvent.click(buttonAdd);

      expect(buttonAdd).toBeDisabled();
    });
  });

  describe("When the user type in the inputs the button", () => {
    test("Then it shoud notDisable", () => {
      const handleSubmit = jest.fn();
      const inputValue = {};
      const isDisable = false;
      const setInputValue = jest.fn();
      const setIsDisable = jest.fn();

      render(
        <FormUser
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          isDisable={isDisable}
          setInputValue={setInputValue}
          setIsDisable={setIsDisable}
        />
      );

      const titleInput = screen.getByPlaceholderText("Type to search title");
      const authorInput = screen.getByPlaceholderText("Type to search author");

      userEvent.type(titleInput, "Arlet");
      userEvent.type(authorInput, "Arlet");

      const addButton = screen.getByRole("button", {
        name: "Add",
      });
      userEvent.click(addButton);

      expect(addButton).not.toBeDisabled();
    });
  });
});
