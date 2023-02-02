import React from "react";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Products/>
      </main>
    </React.Fragment>
  );
}

export default App;
