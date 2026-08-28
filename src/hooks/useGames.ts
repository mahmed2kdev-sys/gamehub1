import { useData } from "./useData";
import type { Game } from "../entities/Game";
import type { Genre } from "../entities/Genre";
import type { Platform } from "../entities/Platform";

export default function useGames(
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) {
  const { data: games, error, isLoading } = useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );
  return { games, error, isLoading };
}

export type { Game, FetchGamesResponse } from "../entities/Game";
