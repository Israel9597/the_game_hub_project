import React from "react";
import { Games } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import IconsMapping from "./IconsMapping";
import Metacritics from "./Metacritics";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  game: Games;
}
const GameCards = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={5} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="1xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <IconsMapping
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Metacritics meta={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
