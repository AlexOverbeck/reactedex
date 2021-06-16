import { render, screen } from "@testing-library/react";
import Screen from "./Screen";

test("it renders with a fallback image", () => {
  render(<Screen pokemon={{}}/>);
  const image = screen.getByAltText(/silhouette/i);
  expect(image).toBeInTheDocument();
});

test("it loads an image of a pokemon based on the id and name passed in", () => {
  const pokeProps = {
    id: 2,
    name: "ivysaur",
  };

  render(<Screen pokemon={pokeProps}/>);
  const image = screen.getByAltText(/ivysaur/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', expect.stringContaining("2.svg"));
});