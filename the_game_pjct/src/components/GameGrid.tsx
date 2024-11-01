import useGames from "../hooks/useGames";
import { ListItem, SimpleGrid, UnorderedList } from "@chakra-ui/react";
import GameCards from "./GameCards";
import LoadingSkeleton from "./LoadingSkeleton";

const GameGrid = () => {
  const { games, errors, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (errors) return <h3>{errors}</h3>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={3}
      padding={2}
    >
      {loading
        ? skeletons.map((skeleton) => <LoadingSkeleton key={skeleton} />)
        : games.map((game) => <GameCards game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
