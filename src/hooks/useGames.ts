import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import type { FetchGamesResponse, Game } from "../entities/Game";

export default function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message ?? "Failed to fetch games");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}

export type { Game, FetchGamesResponse } from "../entities/Game";
