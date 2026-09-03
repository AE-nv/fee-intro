import { sandwiches } from "./data/sandwiches.js";
import { clearBasket, readBasket } from "./cart-store.js";

const summaryList = document.querySelector("#checkout-items");
const itemCount = document.querySelector("#checkout-count");
const subtotalEl = document.querySelector("#checkout-subtotal");
const totalEl = document.querySelector("#checkout-total");
const emptyState = document.querySelector("#checkout-empty");
const placeOrderButton = document.querySelector("#place-order");
const orderMessage = document.querySelector("#checkout-message");

const money = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: "EUR",
});

function formatPrice(value) {
  return money.format(value);
}

function getSandwichById(id) {
  return sandwiches.find((sandwich) => sandwich.id === id);
}

function getBasketSummary() {
  const basket = readBasket();
  const summary = [];
  let itemTotal = 0;
  let total = 0;

  for (const [id, quantity] of basket.entries()) {
    const sandwich = getSandwichById(id);

    if (!sandwich) {
      continue;
    }

    const lineTotal = sandwich.price * quantity;
    itemTotal += quantity;
    total += lineTotal;
    summary.push({ sandwich, quantity, lineTotal });
  }

  return { summary, itemTotal, total };
}

function renderEmptyState() {
  summaryList.replaceChildren();
  emptyState.hidden = false;
  placeOrderButton.disabled = true;
  placeOrderButton.textContent = "Geen items";
}

function renderSummary() {
  const { summary, itemTotal, total } = getBasketSummary();

  itemCount.textContent = `${itemTotal} items`;
  subtotalEl.textContent = formatPrice(total);
  totalEl.textContent = formatPrice(total);

  if (!summary.length) {
    renderEmptyState();
    return;
  }

  emptyState.hidden = true;
  placeOrderButton.disabled = false;
  placeOrderButton.textContent = "Plaats bestelling";

  const rows = summary.map(({ sandwich, quantity, lineTotal }) => {
    const item = document.createElement("li");
    item.className = "checkout-row";

    const title = document.createElement("div");
    title.className = "checkout-row__title";

    const name = document.createElement("strong");
    name.textContent = sandwich.name;

    const meta = document.createElement("span");
    meta.textContent = `${quantity} x ${formatPrice(sandwich.price)}`;

    title.append(name, meta);

    const price = document.createElement("span");
    price.className = "checkout-row__price";
    price.textContent = formatPrice(lineTotal);

    item.append(title, price);
    return item;
  });

  summaryList.replaceChildren(...rows);
}

function handlePlaceOrder() {
  clearBasket();
  renderEmptyState();
  orderMessage.textContent = "Bestelling geplaatst. Bedankt!";
}

placeOrderButton.addEventListener("click", handlePlaceOrder);
renderSummary();

window.addEventListener("storage", (event) => {
  if (event.key === "duivels-broodje-basket") {
    orderMessage.textContent = "";
    renderSummary();
  }
});
