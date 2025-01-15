import React, { useContext, useState, useEffect } from 'react'
import styles from '../styles/Mp.module.css'
import Link from 'next/link'
import Hpsidebar from './Components/Hpsidebar'
import Productcard from './Components/Productcard'
// import { ProdContext } from './Context/Productcontext'
import Swal from "sweetalert2";
import { useRouter } from 'next/router'
import { CartContext } from "./Context/cart_context";
import { isAdmin } from './utils/auth'



function Home() {
const [user, setUser] = useState();
const router = useRouter()
const cart = useContext(CartContext);
const cartURL = `Cart(${cart.cartItems.length})`

useEffect(() => {
  const token = localStorage.getItem("token");
  if(token){
    setUser(localStorage.getItem("name").toString())
  }
}, [])

useEffect(() => {
  const successSession = router.query?.session_id;
  if(successSession){
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Purchase successfully completed. Confirmation email and text message has been sent!",
    });
    onPurchaseSuccess();
  }
  else if(successSession === ''){
    Swal.fire({
      icon: "error",
      title: "Failure!",
      text: "Purchase failed.",
    });
  }
}, [router.query])

function onPurchaseSuccess(){
  const userId = localStorage.getItem("userId");
  fetch(`http://localhost:3000/api/checkout/${userId}`)
  .then((result) => {result.json()
    .then((resp) => {
      // const result = resp[0];
    });
  });
}
  
function logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  Swal.fire({
    icon: "success",
    title: "Successfully Logged out!",
    text: "You have been logged out.",
  });
  router.push("/login");
}


  return (
    <>

      <div className={styles.cardscontainer}> <Productcard></Productcard> </div>

      <Hpsidebar></Hpsidebar>
          
      <div className={styles.pageBg3}>
      
        <nav className={styles.nbcontainer}>
          <div>
            <ul className={styles.ul0}>
              <li className={styles.nblogo}><img src="/trustylogo.png" alt="TrustyShop Logo" /> </li>
              <li className={styles.right}> TrustyShop </li>
            </ul>
          </div>
          <ul className={styles.ul1}>
            <li className={styles.li}><Link href='/Home'> Home </Link> </li>
            {isAdmin() &&
              <li className={styles.li}><Link href='/Admin/Add'> Admin Dashboard </Link></li>
            }
          </ul>
          <ul className={styles.ul2}>
            <li className={styles.right}><Link href='/cart'>{cartURL}</Link></li>
            {user ?
            <><li className={styles.right}> <Link href='/profile'>{user}</Link> </li>
            <li className={styles.right}><button onClick={logout}> Logout </button></li></>
             : <> <li className={styles.right}><Link href='/login'> Login </Link></li>
             <li className={styles.right}><Link href='/Register'> Register </Link></li></>}
          </ul>
        </nav>
        
      </div>
    </>
  )












































































































































  
}
import dynamic from "next/dynamic";


export default dynamic (() => Promise.resolve(Home), {ssr: false});
