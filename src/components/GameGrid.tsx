import { useEffect, useState } from "react";
import { Card, Image, SimpleGrid, Text, Skeleton } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function GameCard({ game }: { game: Game }) {
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

function GameCardSkeleton() {
  return (
    <Card.Root overflow="hidden" borderRadius={10}>
      <Skeleton height="200px" />
      <Card.Body>
        <Skeleton height="20px" />
      </Card.Body>
    </Card.Root>
  );
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  // ponytail: fetch inline useEffect, extract to useGames only if reused
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        if (!cancelled) setGames(res.results);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? "Failed to fetch games");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} gap={4} padding="10px">
      {isLoading
        ? Array.from({ length: 6 }).map((_, i) => <GameCardSkeleton key={i} />)
        : games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
}
