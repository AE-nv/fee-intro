const STORAGE_KEY = "duivels-broodje-basket";

function readStoredValue() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStoredValue(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore storage errors in browsers that block localStorage.
  }
}

export function readBasket() {
  const storedValue = readStoredValue();

  if (!storedValue) {
    return new Map();
  }

  try {
    const entries = JSON.parse(storedValue);
    return new Map(entries);
  } catch {
    return new Map();
  }
}

export function saveBasket(basket) {
  writeStoredValue(JSON.stringify([...basket.entries()]));
}

export function addToBasket(id) {
  const basket = readBasket();
  basket.set(id, (basket.get(id) ?? 0) + 1);
  saveBasket(basket);
  return basket;
}

export function clearBasket() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage errors in browsers that block localStorage.
  }
}
