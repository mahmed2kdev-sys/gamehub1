import { Card, Image, Text } from "@chakra-ui/react";
import type { Game } from "../entities/Game";

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
      </Card.Body>
    </Card.Root>
  );
}
