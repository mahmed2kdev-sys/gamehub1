import { useData } from "./useData";
import type { Game } from "../entities/Game";

export default function useGames() {
  const { data: games, error, isLoading } = useData<Game>("/games");
  return { games, error, isLoading };
}

export type { Game, FetchGamesResponse } from "../entities/Game";
