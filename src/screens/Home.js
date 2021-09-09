import BlogList from "./PokemonList";
import useFetch from "../components/useFetch";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
const Home = () => {
  const {
    error,
    isPending,
    data: pokemons,
  } = useFetch("https://pokeapi.co/api/v2/pokemon/");

  return (
    <div className="home">
      <div></div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {pokemons && <BlogList pokemons={pokemons} />}
    </div>
  );
};

export default Home;
