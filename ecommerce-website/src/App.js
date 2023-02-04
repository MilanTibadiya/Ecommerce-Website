import React from "react";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import CartProvider from "./store/cartProvider";

function App() {
  return (
    <CartProvider>
      <Header/>
      <main>
        <Products/>
      </main>
    </CartProvider>
  );
}

export default App;
