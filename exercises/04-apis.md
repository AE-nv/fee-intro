# 4 — Loading the menu from an API

**Start from** `4-apis-start` · **Solution** `4-apis-solution`

Unlike the other exercises, this one has its own start branch: it needs the
TanStack Query dependencies and setup in place before you begin.

The menu is still a hardcoded array. Replace it with a client-side fetch using
[TanStack Query](https://tanstack.com/query/latest).

## Already wired up for you

- `GET /api/sandwiches` returns the menu, with a deliberate 1.5 second delay so
  the loading state is actually visible
- `QueryProvider` creates the `QueryClient` and mounts the devtools, and is
  already in the root layout
- `Spinner`, `Skeleton` and `SandwichCardSkeleton` are ready to use

## What to build

1. A hook that fetches `/api/sandwiches` with `useQuery`
2. Use it on the menu page instead of importing the array
3. Show the skeletons while it loads, and handle the error case
4. Make the sandwich count come from the fetched data
5. Use the same hook on the cart page, and notice it doesn't refetch

## Documentation

| Link                                                                                            | Use it for                                               |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [Overview](https://tanstack.com/query/latest/docs/framework/react/overview)                     | What TanStack Query does and why you'd want it           |
| [Queries](https://tanstack.com/query/latest/docs/framework/react/guides/queries)                | Query keys, query functions and the loading/error states |
| [useQuery reference](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery) | Every option and every value the hook returns            |
| [Devtools](https://tanstack.com/query/latest/docs/framework/react/devtools)                     | Inspecting the cache while you work                      |
