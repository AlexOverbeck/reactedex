import { render, screen } from "@testing-library/react";
import Screen from "./Screen";

test("it renders with an image", () => {
  render(<Screen pokemon={{}}/>);
  const image = screen.getByAltText(/pikachu/i);
  expect(image).toBeInTheDocument();
});