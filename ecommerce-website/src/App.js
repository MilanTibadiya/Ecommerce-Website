import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import CartProvider from "./store/cartProvider";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import ContactUs from './components/Pages/ContactUS/ContactUs';
import Product1 from "./components/Products/ProductsImages/Product_1";
import Login from "./components/Auth/login";

import PrivateRoute from "./components/Pages/PrivateRoute";
// let token = localStorage.getItem('token');

const router = createBrowserRouter( [ 
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/products', element: <PrivateRoute><Products/></PrivateRoute> }, 
      { path: '/products/:id', element: <PrivateRoute><Product1/></PrivateRoute> },
      { path: '/about', element: <About/> },
      { path: '/contact', element: <ContactUs/>},
      { path: '/login', element: <Login/>},
      { path: '*', element:<Login/>}
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
