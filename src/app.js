import { sandwiches } from "./data/sandwiches.js";

const menuList = document.querySelector("#menu-list");
const menuCount = document.querySelector("#menu-count");
const cartCount = document.querySelector("#cart-count");

const basket = new Map();

const money = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: "EUR",
});

function formatPrice(value) {
  return money.format(value);
}

function getBasketTotal() {
  let total = 0;

  for (const quantity of basket.values()) {
    total += quantity;
  }

  return total;
}

function updateCartBadge() {
  const total = getBasketTotal();

  cartCount.textContent = String(total);
  cartCount.hidden = total === 0;
}

function addToBasket(id) {
  basket.set(id, (basket.get(id) ?? 0) + 1);
  updateCartBadge();
}

function renderTag(tag) {
  const span = document.createElement("span");
  span.className = `tag tag--${tag.tone}`;
  span.textContent = tag.label;
  return span;
}

function renderSandwichCard(sandwich) {
  const item = document.createElement("li");
  item.className = "menu-card";

  const image = document.createElement("img");
  image.className = "menu-card__image";
  image.src = sandwich.image;
  image.alt = `Broodje ${sandwich.name}`;
  item.append(image);

  const content = document.createElement("div");
  content.className = "menu-card__content";

  const titleRow = document.createElement("div");
  titleRow.className = "menu-card__title-row";

  const title = document.createElement("h3");
  title.className = "menu-card__title";
  title.textContent = sandwich.name;
  titleRow.append(title);

  for (const tag of sandwich.tags) {
    titleRow.append(renderTag(tag));
  }

  const description = document.createElement("p");
  description.className = "menu-card__description";
  description.textContent = sandwich.description;

  const footer = document.createElement("div");
  footer.className = "menu-card__footer";

  const price = document.createElement("span");
  price.className = "price";
  price.textContent = formatPrice(sandwich.price);

  const button = document.createElement("button");
  button.className = "add-button";
  button.type = "button";
  button.textContent = "Toevoegen";
  button.addEventListener("click", () => addToBasket(sandwich.id));

  footer.append(price, button);
  content.append(titleRow, description, footer);
  item.append(content);

  return item;
}

function renderMenu() {
  menuCount.textContent = `${sandwiches.length} broodjes`;
  menuList.replaceChildren(...sandwiches.map(renderSandwichCard));
}

renderMenu();
updateCartBadge();
