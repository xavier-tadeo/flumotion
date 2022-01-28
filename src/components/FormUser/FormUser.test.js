import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormUser } from "./FormUser";

describe("Given a Form component", () => {
  describe("When it render", () => {
    test("Then should a rendered a two inputs two label and one button", () => {
      render(<FormUser />);

      const title = screen.getByLabelText("Title");
      const author = screen.getByLabelText("Author");
      const addButton = screen.getByRole("button");
      userEvent.click(addButton);

      expect(title).toBeInTheDocument();
      expect(author).toBeInTheDocument();
      expect(addButton).toBeInTheDocument();
    });
  });
  describe("When the user type in inputs", () => {
    test("Then it should change a value", () => {
      render(<FormUser />);

      userEvent.type(
        screen.getByRole("textbox", { name: "Title" }),
        `Extremo Duro`
      );
      userEvent.type(
        screen.getByRole("textbox", { name: "Author" }),
        `Extremo`
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
