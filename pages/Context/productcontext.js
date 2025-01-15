
import  {createContext,  useEffect, useState} from 'react';

const ProdContext = createContext();
const ProdProvider = ({children}) => {
// Get Product Data fom API
const [allProducts, setAllProducts] = useState([]);

useEffect(() => {
  getProducts('all')
}, []);

const getProducts = (id) => {
  try {
    fetch("http://localhost:3000/api/productcard/"+ id)
    .then((result) => { result.json()
      .then((allProducts) => { setAllProducts(allProducts);
      });
    });
  } catch (error) {
  }
}


return (
  <ProdContext.Provider value= {{allProducts, getProducts}}>
    {children}
  </ProdContext.Provider>
  )
}

export {ProdProvider, ProdContext}