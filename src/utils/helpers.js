export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value,
  );

export function loadState() {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return [];
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
}
