export const baseUrl =
  "https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/";
const url = baseUrl + "productinfo.json";
import { getCartItems } from "./cart.js";

export async function fetchingProducts() {
  console.log("fetchingProducts");
  const response = await fetch(url);
  const data = await response.json();

  localStorage.setItem("dataOfProducts", JSON.stringify(data));
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", "[]");
  }
  return data;
}

// function initiateProduct() {
//   const cartItems = getCartItems();
//   console.log(cartItems);
//   const cartCount = document.getElementById("cart-count");
//   console.log(cartCount);
//   cartCount.innerText = cartItems?.length || null;
// }

// initiateProduct();
