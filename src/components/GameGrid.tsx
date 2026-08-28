import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "../entities/Genre";
import type { Platform } from "../entities/Platform";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export default function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { games, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 5 }} gap={4} padding="10px">
      {isLoading
        ? Array.from({ length: 6 }).map((_, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))
        : games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
}
