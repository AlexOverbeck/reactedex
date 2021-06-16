import { render, screen, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import Pokedex from "./Pokedex";
import { SEARCH_QUERY } from "../api/query";

test("it enters an error state if the request fails", async () => {
  const mock = {
    request: {
      query: SEARCH_QUERY,
      variables: { search: "pikachu" },
    },
    error: new Error("An error occurred"),
  };

  render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <Pokedex />
    </MockedProvider>
  );

  const error = await screen.findByText(/error/i);
  expect(error).toBeInTheDocument();
});

test("initially loads a pokemon and renders successfully after a request", async () => {
  const mock = {
    request: {
      query: SEARCH_QUERY,
      variables: { search: "" },
    },
    result: {
      data: {
        pokemon: [
          { id: 25, name: "bulbasaur", description: [{ flavor_text: "the pokemon description" }]}
        ],
      }
    }
  };

  const { debug } = render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <Pokedex />
    </MockedProvider>
  );

  const title = await screen.findByText(/bulbasaur/i);
  expect(title).toBeInTheDocument();
});
