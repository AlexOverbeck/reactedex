import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

test("it renders with an input", () => {
  render(<Search />);
  const searchInput = screen.getByLabelText(/search/i);
  expect(searchInput).toBeInTheDocument();
});

test("it updates input value when a user types in the input", () => {
  render(<Search />);
  const searchInput = screen.getByLabelText(/search/i);
  expect(searchInput).toHaveValue("")
  userEvent.type(searchInput, "Charmander");
  expect(searchInput).toHaveValue("Charmander");
});
