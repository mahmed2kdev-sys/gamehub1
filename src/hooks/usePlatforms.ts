import { useData } from "./useData";
import type { Platform } from "../entities/Platform";

export default function usePlatforms() {
  const { data: platforms, error, isLoading } = useData<Platform>("/platforms/lists/parents");
  return { platforms, error, isLoading };
}
