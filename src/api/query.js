import { gql } from "@apollo/client";

export const SEARCH_QUERY = gql`
  query pokemon($search: String!) {
    pokemon: pokemon_v2_pokemonspecies(where: {name: {_iregex: $search}}) {
      id
      name
      description: pokemon_v2_pokemonspeciesflavortexts(limit: 1, where: {language_id: {_eq: 9}}) {
        flavor_text
      }
    }
  }
`;