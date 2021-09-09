import { useHistory, useParams } from "react-router-dom";
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

const PokemonDetails = ({ myteam }) => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  const { name } = useParams(); //to pass the pokemon by name
  const history = useHistory();
  const List = [];
  // const [list, setList] = useState([]);
  const [data, setData] = useState({});
  const [abilities, setAbilities] = useState({});
  const [stats, setStats] = useState({});
  // var teamList = [];

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(function (response) {
        // handle success

        setData(response.data);
        setAbilities(response.data.abilities);
        setStats(response.data.stats);

        // setDetails(response.data);
      })
      .catch(function (error) {
        // handle <error></error>
        console.log(error);
      });
  }, [name]);
  // const ab = abilities[0];

  // console.log(abilities[0]);

  const handleDelete = () => {
    const index = myPokemons.indexOf(name);
    if (index > -1) {
      myPokemons.splice(index, 1);
      fs.writeFile("myPokemons.js", myPokemons);
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
        alert("this pokemon is existed");
      } else {
        console.log(myPokemons, "12");
        myPokemons.push(name);
        console.log(myPokemons, "13");
        fs.writeFile("myPokemons.js", myPokemons);
      }
    }
  };

  return (
    <Container>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Table variant="simple">
          <TableCaption>your Pokemon</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>

      <Button m={[2, 3]} colorScheme="blue" onClick={handleAdd}>
        Add
      </Button>
      <Button colorScheme="red" onClick={handleDelete}>
        Delete
      </Button>
      {/* <h1>
        {data.abilities[0]?.score ? data.abilities[0].score : "No scores found"}
      </h1> */}
    </Container>
  );
};

export default PokemonDetails;
