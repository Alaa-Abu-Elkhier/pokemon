import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import UserPokemon from "./screens/UserPokemon";
import PokemonDetails from "./screens/PokemonDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/PokemonDetails/:name">
                <PokemonDetails />
              </Route>
              <Route path="/userPokemon">
                <UserPokemon />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
