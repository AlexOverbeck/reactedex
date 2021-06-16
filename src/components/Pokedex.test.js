import { render, screen, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import Pokedex from "./Pokedex";
import { SEARCH_QUERY } from "../api/query";

test("it's initially in a loading state while data loads", async () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <Pokedex />
    </MockedProvider>
  );

  const loading = await screen.findByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

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

test("renders successfully after a request", async () => {
  const mock = {
    request: {
      query: SEARCH_QUERY,
      variables: { search: "pikachu" },
    },
    result: {
      data: {
        pokemon: [
          { id: 25, name: "pikachu", description: [{ flavor_text: "the pokemon description" }]}
        ],
      }
    }
  };

  render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <Pokedex />
    </MockedProvider>
  );

  const title = await screen.findByText(/pikachu/i);
  expect(title).toBeInTheDocument();
});
