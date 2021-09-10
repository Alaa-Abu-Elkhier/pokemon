import { useState } from "react";
import myPokemons from "../data/myPokemons";
import { Link } from "react-router-dom";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Container,
} from "@chakra-ui/react";
var fs = require("browserify-fs");

const UserPokemon = () => {
  return (
    <Container>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Pokemon Name</Th>
            <Th>Pokemon Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {myPokemons.map((pokemon, index) => (
            <Tr>
              <Td>{pokemon.toUpperCase()}</Td>
              <Td>
                {/* <Link href={`/PokemonDetails/${pokemon}`}>
                  {pokemon.toUpperCase()} Details
                </Link> */}
                <Link
                  to={`/PokemonDetails/${pokemon}`}
                  style={{
                    color: "black",
                  }}
                >
                  {pokemon.toUpperCase()}
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr></Tr>
        </Tfoot>
      </Table>
    </Container>
  );
};

export default UserPokemon;
