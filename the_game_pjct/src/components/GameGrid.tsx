import useGames, { Platform } from "../hooks/useGames";
import { filter, SimpleGrid } from "@chakra-ui/react";
import GameCards from "./GameCards";
import LoadingSkeleton from "./LoadingSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, errors, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (errors) return <h3>{errors}</h3>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={1}
      padding={2}
    >
      {loading
        ? skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <LoadingSkeleton />
            </GameCardContainer>
          ))
        : data.map((game: any) => (
            <GameCardContainer key={game.id}>
              <GameCards gamer={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
