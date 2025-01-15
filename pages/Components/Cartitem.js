import React from 'react'

const CartItem = ({productid, price, info, title, imgurl}) => {
  console.log(productid)
  return (
    <>
     <div>
        <figure>
            <img hight="100" width="100" src={imgurl} alt={productid}/>
        </figure>
    </div> 
    </>
  )
}

export default CartItem
