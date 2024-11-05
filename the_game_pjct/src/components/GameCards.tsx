import React from "react";
import { Games } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import IconsMapping from "./IconsMapping";
import Metacritics from "./Metacritics";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  gamer: Games;
}
const GameCards = ({ gamer }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(gamer.background_image)}
        alt={gamer.name}
      />
      <CardBody>
        <Heading fontSize="1xl">{gamer.name}</Heading>
        <HStack justifyContent="space-between">
          <IconsMapping
            platforms={gamer.parent_platforms.map((p) => p.platform)}
          />
          <Metacritics meta={gamer.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
