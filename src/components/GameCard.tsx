import { Card, Image, Text, HStack } from "@chakra-ui/react";
import type { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} loading="lazy" />
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
