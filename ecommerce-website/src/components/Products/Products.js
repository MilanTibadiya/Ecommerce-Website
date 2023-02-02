import React from "react";

import ProductItem from "./ProductItem";
import classes from "./Products.module.css"

const productsArr = [
    {
    id: 'p1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    id: 'p2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    id: 'p3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    id: 'p4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]

    const ProductsItems = productsArr.map((item) => (
        <ProductItem
        id={item.id}
        key={item.id}
        title={item.title}
        img={item.imageUrl}
        price={item.price}
        />
    ));

    const Products = () => {
    return (
        <section className={classes.section}>
            {ProductsItems}
        </section>        
    );
};

export default Products;