import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const { games, error, isLoading } = useGames();

  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={4} padding="10px">
      {isLoading
        ? Array.from({ length: 6 }).map((_, i) => <GameCardSkeleton key={i} />)
        : games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
}
