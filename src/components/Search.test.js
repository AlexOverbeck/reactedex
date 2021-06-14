import { render, screen } from "@testing-library/react";
import Search from "./Search";

test("it renders with an input", () => {
  render(<Search />);
  const searchInput = screen.getByLabelText(/search/i);
  expect(searchInput).toBeInTheDocument();
});
