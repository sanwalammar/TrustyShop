"use client";
import React from "react";
import { useContext } from "react";
import { CartContext } from "./Context/cart_context";
import CartItem from "./Components/Cartitem";
import { useEffect, useState, useLayoutEffect } from "react";
import { checkout } from './Components/Checkout'
import styles from './../styles/Cart.module.css'
import { isAuthenticated } from './utils/auth'
import { useRouter } from "next/router";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from "@mui/material/colors";


import Swal from "sweetalert2";


const Cart = () => {
  const cart = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter()

  useLayoutEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login')
    }
  }, []);

  useEffect(() => {
    let total;
    if (cart.cartItems.length) {
      total = cart.cartItems.reduce((t, item) => {
        return t + parseInt(item.price) * parseInt(item.quantity);
      }, 0);
    }
    setTotalPrice(total);
  }, []);


  function del() {
    localStorage.removeItem("productid");
    localStorage.removeItem("price");
    localStorage.removeItem("title");
    localStorage.removeItem("quantity");
    Swal.fire({
      icon: "success",
      title: "Successfully !",
      text: "You have been delete Item.",
    });
   }




  return (
    <>
    <div className={styles.pageBg}>

      <div className={styles.cartcontainer}>
      <Typography sx={{ flex: '1 1 1 50%' }}
          variant="h4"
          id="tableTitle"
          component="div"
          align="center"> Cart Items</Typography>
     <TableContainer > 
      <Table sx={{ minWidth: 300}} aria-label="simple table">
                   
              <TableHead>
                 <TableRow>
                 <TableCell>
                            <b>Product ID</b>
                  </TableCell>
                  <TableCell>
                           <b>Images</b>
                  </TableCell>
                  <TableCell>
                            <b>Title</b>
                  </TableCell>
                  <TableCell>
                            <b>Quantity</b>
                  </TableCell>
                  <TableCell >
                            <b>Price</b>
                  </TableCell>
                  <TableCell>
                            <b>Action</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              
                {cart.cartItems.map((curElem) => ( 
                
                  <TableBody> 
                <TableRow Key = {curElem.product_id}>
                 <TableCell>
                            {curElem.product_id}
                  </TableCell>
                  <TableCell>
                      <CartItem key={curElem.productid} {...curElem} />
                  </TableCell>
                  <TableCell>
                            {curElem.title}
                  </TableCell>
                  <TableCell>
                            {curElem.quantity}
                  </TableCell>
                  <TableCell >
                            ${curElem.price}   
                  </TableCell>
                  <TableCell>
                  <button onClick={del} > <DeleteIcon sx={{ color: red[500] }} /> </button>
                  </TableCell>
                </TableRow>
              </TableBody>
                ))}
             
                       
        </Table>
        </TableContainer>
       
               
        
         <div className={styles.Mathcontainer}> Total Price      =     ${totalPrice}  
        <Button variant="contained" color="success" 
          onClick={() => {
            checkout({
              lineItems: [
                { price: "price_1NlwTrGEUxuRBS0X1D3Nzp1s", quantity: 1 },
              ],
            });
          }}
        >
          Purchase
        </Button>
        </div>
      </div>
    </div>
    </>
  );
};



export default Cart;
