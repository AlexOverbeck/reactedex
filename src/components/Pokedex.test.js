import { render, screen } from "@testing-library/react";
import Pokedex from "./Pokedex";

test("it renders", () => {
  render(<Pokedex />);
  const pokedexText = screen.getByText(/pokedex/i);
  expect(pokedexText).toBeInTheDocument();
});
