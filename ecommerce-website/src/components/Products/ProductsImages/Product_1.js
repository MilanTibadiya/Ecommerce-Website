import React from "react";
import { useParams } from "react-router-dom";

import classes from './Product_1.module.css'

const productsDetails = [
    {
    id: 'p1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
   
    ProductReview: [
        { name: 'Milan', review: 'I recommend this product'},
        { name: 'Vikesh', review: 'ok, product'},
        { name: 'Zoya', review: 'good in this price'},
        { name: 'Krishna', review: 'worth it'},
    ]
    },
    {
    id: 'p2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    ProductReview: [
        { name: 'Milan', review: 'I recommend this product'},
        { name: 'Vikesh', review: 'ok, product'},
        { name: 'Zoya', review: 'good in this price'},
        { name: 'Krishna', review: 'worth it'},
    ]
    },
    {
    id: 'p3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    ProductReview: [
        { name: 'Milan', review: 'I recommend this product'},
        { name: 'Vikesh', review: 'ok, product'},
        { name: 'Zoya', review: 'good in this price'},
        { name: 'Krishna', review: 'worth it'},
    ]
    },
    {
    id: 'p4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    ProductReview: [
        { name: 'Milan', review: 'I recommend this product'},
        { name: 'Vikesh', review: 'ok, product'},
        { name: 'Zoya', review: 'good in this price'},
        { name: 'Krishna', review: 'worth it'},
    ]
    }
    ]

const Product1 = () => {
    // const params = useParams();
    // console.log(params.id)
    const { id } = useParams(); //params in key, value pair we destrcuring and get key only

    //here array so, for finding that perticular image we use find 
  let product = productsDetails.find((value) => value.id === id);
  console.log(product);
  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.itemImage}>
          <img src={product.imageUrl} alt="product-images"/>
          <p>Insert image Block</p>
        </div>
        <div className={classes.itemDetails}>
          <h1>{product.title}</h1>
          <h3>Price: ${product.price} </h3><span> 55% off</span>
          <div className={classes.itemReview}>
            <p className={classes.reviewtitle}>Reviews : </p>
            {product.ProductReview.map((e) => (
                <div className={classes.itemReview1}>
                    <p>{e.name} - </p> 
                    <p>{e.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Product1;