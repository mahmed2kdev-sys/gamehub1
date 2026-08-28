import { useData } from "./useData";
import type { Game } from "../entities/Game";
import type { Genre } from "../entities/Genre";

export default function useGames(selectedGenre: Genre | null) {
  const { data: games, error, isLoading } = useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );
  return { games, error, isLoading };
}

export type { Game, FetchGamesResponse } from "../entities/Game";
