export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: { id: number; name: string; slug: string } }[];
  metacritic: number | null;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}
