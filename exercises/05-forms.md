# 5 — Forms

**Start from** `4-apis-solution` · **Solution** `5-forms-solution`

The cart's "Naar afrekenen" button still does nothing. Finish the flow: a
checkout form to fill in, and a confirmation page to land on.

## What to build

1. A `/checkout` route with the order form — name, phone, email, delivery slot,
   a remark, and whether to cut the sandwich in two.
2. Drive the fields from state, and show the basket summary and total next to
   the form.
3. Validate on submit: required fields, and an email that looks like one.
4. On submit, send the customer to a confirmation page at `/order`.
5. Show what was ordered on the confirmation page, and empty the basket — the
   order details have to survive the basket being cleared.
6. Point the cart's "Naar afrekenen" button at `/checkout`.

## Documentation

| Link                                                                                 | Use it for                                 |
| ------------------------------------------------------------------------------------ | ------------------------------------------ |
| [Reacting to input with state](https://react.dev/learn/reacting-to-input-with-state) | Driving a form from state                  |
| [`<input>`](https://react.dev/reference/react-dom/components/input)                  | Controlled inputs: `value` plus `onChange` |
| [`useRouter`](https://nextjs.org/docs/app/api-reference/functions/use-router)        | Navigating after a successful submit       |
