import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
   const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {
        const isOldItem = false;
        let updatedItems;
        if(cartItems.length){
         updatedItems = cartItems.map(i => {
            if(i.product_id === item.product_id){
                isOldItem = true;
                return {...i, quantity: i.quantity + 1}
            }
            return i;
        })}
        if(isOldItem){
            setCartItems(updatedItems)
        }
        else {
            setCartItems([...cartItems, {...item, quantity: 1}])
        }
    };

    console.log('cartItems', cartItems)

    return (
    <CartContext.Provider value= {{cartItems, addToCart}}>
        {children}
    </CartContext.Provider>
);
};
    


export {CartProvider, CartContext};