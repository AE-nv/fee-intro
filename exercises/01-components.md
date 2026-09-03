# 1 — Components

**Start from** `main` · **Solution** `1-components-solution`

Right now the whole menu page is one component. Every sandwich card is written
out by hand, six times, with its name, description and price hardcoded in the
markup.

## What to build

1. Extract the repeated parts into components under `src/components`.
2. Move the sandwich list into `src/data/sandwiches.ts`.
3. Render the grid by mapping over that list instead of repeating the markup.
4. Make the "6 broodjes" label come from the length of the list.
