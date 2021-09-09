import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Box,
  Container,
  Center,
  Input,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const PokemonList = ({ pokemons }) => {
  const [randomSearch, setRandomSearch] = useState("");
  const [searchText, setsearchText] = useState("");
  const pokemonsData = pokemons.results; //contain the name of pokemons and url to thier details
  var pokemonList = [];

  const List = pokemonsData.map((pokemon) => {
    pokemonList = pokemon.name;
    return pokemonList; //List contain the name of pokemons
  });
  var randomName = List[Math.floor(Math.random() * List.length)];

  return (
    <Container>
      <Container>
        <Button
          colorScheme="red"
          marginX="-400px"
          onClick={() => setRandomSearch(randomName)}
        >
          Random Serch
        </Button>
        <Box
          borderRadius="xl"
          margin="-10"
          padding="3"
          bg="gray.100"
          w="150px"
          h="10"
          marginY="-10"
          marginX="-210px"
        >
          <Center>
            <Link
              to={`/PokemonDetails/${randomSearch}`}
              style={{
                color: "black",
              }}
            >
              {randomSearch.toUpperCase()}
            </Link>
          </Center>
        </Box>
      </Container>

      <Input
        type="text"
        placeholder="Search"
        onChange={(event) => setsearchText(event.target.value)}
      />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Pokemon List</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              {" "}
              {searchText
                ? pokemonsData
                    .filter(
                      (pokemon) => pokemon.name.indexOf(searchText) !== -1
                    )

                    .map((pokemon, index) => (
                      <div className="blog-preview" key={index}>
                        <Link
                          to={`/PokemonDetails/${pokemon.name}`}
                          style={{
                            color: "black",
                          }}
                        >
                          {pokemon.name.toUpperCase()}
                        </Link>
                      </div>
                    ))
                : pokemonsData.map((pokemon, index) => (
                    <div className="blog-preview" key={index}>
                      <Link
                        to={`/PokemonDetails/${pokemon.name}`}
                        style={{
                          color: "black",
                        }}
                      >
                        {pokemon.name.toUpperCase()}
                      </Link>
                    </div>
                  ))}
            </Td>
          </Tr>
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </Container>
  );
};

export default PokemonList;
