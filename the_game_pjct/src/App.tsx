import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import Platforms from "./components/Platforms";
import { Games, Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // Small screens
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px" }}
    >
      <GridItem area="nav" bg="">
        <Nav />
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "block" }}
        area="aside"
        paddingX={5}
      >
        <SideBar
          setFilterName={(genre) => setGameQuery({ ...gameQuery, genre })}
          filterName={gameQuery.genre}
        />
      </GridItem>
      <GridItem area="main">
        <HStack padding={2}>
          <Platforms
            onSelectPf={(platform) => setGameQuery({ ...gameQuery, platform })}
            selectPlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectSortOrder={(order) => setGameQuery({ ...gameQuery, order })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
