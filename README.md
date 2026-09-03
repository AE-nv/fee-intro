# Het Duivels Broodje

Demo project for the frontend intro. It's a sandwich menu built with plain
HTML, CSS and JavaScript.

## Getting started

Requires [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the local static server on port 3000 |
| `npm run build` | Print a no-build reminder                 |
| `npm run start` | Start the local static server             |
| `npm run lint`  | Run ESLint                                |

## Exercises

`main` is the starting point: the entire menu page lives in one plain browser
app, with no framework, no props, no data layer and no state.

The exercises build on each other. Each assignment says which branch to start
from and where its solution lives.

| Exercise                                                      | Assignment                                                                               |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 1 — Split the page into components, render the menu as a list | [01-components.md](exercises/01-components.md)                                           |
| 2 — Basket state, with the header badge derived from it       | [02-state-management-and-reactivity.md](exercises/02-state-management-and-reactivity.md) |
| 3 — A `/cart` route, with the basket shared across routes     | [03-routing-and-shared-state.md](exercises/03-routing-and-shared-state.md)               |
| 4 — Load the menu from an API with TanStack Query             | [04-apis.md](exercises/04-apis.md)                                                       |
