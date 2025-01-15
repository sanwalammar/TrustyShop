
import '../styles/globals.css'
import { ProdProvider} from './Context/productcontext'
import { CartProvider } from './Context/cart_context';





function MyApp({ Component, pageProps }) {
   
    
   
    
  return (
    <ProdProvider>
      <CartProvider>
       <Component {...pageProps} />
      </CartProvider> 
    </ProdProvider>
  );
}

export default MyApp;
