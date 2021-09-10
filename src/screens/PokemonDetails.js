import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import myPokemons from "../data/myPokemons";
import {
  Button,
  Container,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

var fs = require("browserify-fs");

const PokemonDetails = () => {
  const { name } = useParams(); //to pass the pokemon by name

  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(function (response) {
        // handle success
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle <error></error>
        console.log(error);
      });
  }, [name]);

  console.log(data.abilities, "22");

  const handleDelete = () => {
    const index = myPokemons.indexOf(name);
    if (index > -1) {
      myPokemons.splice(index, 1);
      fs.writeFile("myPokemons.js", myPokemons);
      alert("Pokemon Deleted From your Team");
    } else {
      alert("this pokemon is not  existed");
    }

    console.log(myPokemons, "13");
  };
  const handleAdd = () => {
    if (myPokemons.length >= 6) {
      alert("you have orady added your avaliable pokemons");
    } else {
      const foundElement = myPokemons.find((pokemon) => {
        return name === pokemon;
      });

      if (foundElement) {
        alert("this pokemon is  existed");
      } else {
        console.log(myPokemons, "12");
        myPokemons.push(name);
        console.log(myPokemons, "13");
        fs.writeFile("myPokemons.js", myPokemons);
        alert("Pokemon added to your Team");
      }
    }
  };

  return (
    <Container>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Table variant="simple">
          <TableCaption>Pokemon Details</TableCaption>
          <Thead>
            <Tr>
              <Th>Abilities</Th>
              <Th>slots</Th>
            </Tr>
          </Thead>
          {/* <Tbody>
            {data.abilities.map((ability, index) => (
              <Tr>
                <Td>{ability.ability.name.toUpperCase()}</Td>
                <Td>{ability.slot}</Td>
              </Tr>
            ))}{" "}
          </Tbody> */}
          <Tfoot></Tfoot>
        </Table>
      </Box>

      <Button m={[2, 3]} colorScheme="blue" onClick={handleAdd}>
        Add
      </Button>
      <Button colorScheme="red" onClick={handleDelete}>
        Delete
      </Button>
    </Container>
  );
};

export default PokemonDetails;
