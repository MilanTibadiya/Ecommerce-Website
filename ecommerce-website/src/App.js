import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import CartProvider from "./store/cartProvider";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import ContactUs from './components/Pages/ContactUS/ContactUs';
import Product1 from "./components/Products/ProductsImages/Product_1";

const router = createBrowserRouter( [ 
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/products', element: <Products/> },
      { path: '/about', element: <About/> },
      { path: '/contact', element: <ContactUs/>},
      {path: '/products/:id', element: <Product1/>},
    ],
  },
] );

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}/>
      {/* <Header/>
      //<main>
       // <Products/>
      //</main> */}
    </CartProvider>
  );
}

export default App;
