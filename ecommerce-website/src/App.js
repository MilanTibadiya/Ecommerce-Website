import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import CartProvider from "./store/cartProvider";

import Home from "./components/Home/Home";
import About from "./components/About/About";

const router = createBrowserRouter( [ 
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: '/', element: <Home/> },
       { path: '/products', element: <Products/> },
      { path: '/about', element: <About/> }
    ],
  },
] );

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}/>
     // {/* <Header/>
      //<main>
       // <Products/>
      //</main> */}
    </CartProvider>
  );
}

export default App;
