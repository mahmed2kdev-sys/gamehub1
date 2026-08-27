import { useData } from "./useData";
import type { Genre } from "../entities/Genre";

export default function useGenres() {
  const { data: genres, error, isLoading } = useData<Genre>("/genres");
  return { genres, error, isLoading };
}
