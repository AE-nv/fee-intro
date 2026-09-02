import { sandwiches } from "@/data/sandwiches";

/**
 * Fake latency, so the loading state is actually visible while developing.
 * A real API would be fast and unpredictable; this one is slow on purpose.
 */
const DELAY_MS = 1500;

// Route Handlers aren't cached by default, but be explicit: this route must
// run on every request or the delay would be baked in at build time.
export const dynamic = "force-dynamic";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
  return Response.json(sandwiches);
}
