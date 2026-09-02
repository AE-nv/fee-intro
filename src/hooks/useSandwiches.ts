import { useQuery } from "@tanstack/react-query";
import type { Sandwich } from "@/data/sandwiches";

async function fetchSandwiches(): Promise<Sandwich[]> {
  const response = await fetch("/api/sandwiches");

  // fetch only rejects on network errors, so check the status ourselves.
  // Throwing here is what puts the query into its error state.
  if (!response.ok) {
    throw new Error(`Kon de broodjes niet ophalen (${response.status})`);
  }

  return response.json();
}

export function useSandwiches() {
  return useQuery({
    // Every component that uses this key shares one cache entry and one request.
    queryKey: ["sandwiches"],
    queryFn: fetchSandwiches,
  });
}
