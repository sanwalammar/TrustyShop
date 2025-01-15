import React, { useEffect, useState, useContext } from "react";
import styles from "../../styles/Mp.module.css";
import Image from "next/image";
import Router from "next/router";
import { ProdContext } from "./../Context/productcontext";
import { CartContext } from "./../Context/cart_context";
import dynamic from "next/dynamic";



function Productcard() {
  const products = useContext(ProdContext);
  const cart = useContext(CartContext);

  const onCart = (item) => {
    cart.addToCart(item);
    // Router.push("/cart");
  };

  return (
    <>
      {products.allProducts?.map((item) => {
        return (
          <div className={styles.card2}>
            <div className={styles.imgcontainer}>
              <Image
                src={item.imgurl}
                layout="intrinsic"
                width={300}
                height={230}
              />
            </div>
            <div className={styles.title}>
              <h1 className={styles.h1}>{item.title}</h1>
            </div>
            <div className={styles.info}>
              <h2>{item.info}</h2>
            </div>
            <div className={styles.btncontainer}>
              <button onClick={() => onCart(item)}>
                <div className={styles.cartbtn}>Add to Cart</div>
              </button>
            </div>
            <div className={styles.price}>${item.price}</div>
          </div>
        );
      })}
    </>
  );
}

export default dynamic (() => Promise.resolve(Productcard), {ssr: false});


