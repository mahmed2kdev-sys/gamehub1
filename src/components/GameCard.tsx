import { Card, Image, Text, HStack } from "@chakra-ui/react";
import type { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card.Root overflow="hidden" borderRadius={10}>
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Text fontSize="lg" fontWeight="medium">
          {game.name}
        </Text>
        <HStack justify="space-between">
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}
