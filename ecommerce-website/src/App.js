import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Header from "./components/Layout/Header";
// import Products from "./components/Products/Products";
// import Home from "./components/Pages/Home/Home";
// import About from "./components/Pages/About/About";
// import ContactUs from './components/Pages/ContactUS/ContactUs';
// import Product1 from "./components/Products/ProductsImages/Product_1";
// import Login from "./components/Auth/login";
// import PrivateRoute from "./components/Pages/PrivateRoute";

import CartProvider from "./store/cartProvider";

const Header = lazy(() => import("./components/Layout/Header"));
const Home = lazy(() => import("./components/Pages/Home/Home"));
const Products = lazy(() => import("./components/Products/Products"));
const Product1 = lazy(() => import("./components/Products/ProductsImages/Product_1"));
const About = lazy(() => import("./components/Pages/About/About"));
const ContactUs = lazy(() => import('./components/Pages/ContactUS/ContactUs'));
const Login = lazy(() => import("./components/Auth/login"));
const PrivateRoute = lazy(() => import("./components/Pages/PrivateRoute"));

const router = createBrowserRouter( [ 
  {
    path: '/',
    element: <Suspense><Header/></Suspense>,
    children: [
      { path: '/', element: <Suspense><Home/></Suspense> },
      { path: '/products', element: <Suspense><PrivateRoute><Products/></PrivateRoute></Suspense> }, 
      { path: '/products/:id', element: <Suspense><PrivateRoute><Product1/></PrivateRoute></Suspense> },
      { path: '/about', element: <Suspense><About/></Suspense> },
      { path: '/contact', element: <Suspense><ContactUs/></Suspense> },
      { path: '/login', element: <Suspense><Login/></Suspense> },
      { path: '*', element:<Suspense><Login/></Suspense> }
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
