import styles from '../../styles/Mp.module.css'
import React, {useEffect, useState, useContext} from 'react'
import { ProdContext } from "./../Context/productcontext";

import dynamic from "next/dynamic";




function Hpsidebar() {
  const [data, setData]= useState([])
  const products = useContext(ProdContext);

  console.log("cat", data)
     useEffect(()=>{
      fetch("http://localhost:3000/api/hpsidebar")
      .then((result)=>{result.json()
      .then((resp)=>{setData(resp)        
      })
    })
    },[])

      
    
    const onClickCat = (id) => {
      products.getProducts(id)
    }
    
   
  return (
<>
    <div>
        <div className={styles.sbcontainer}>
           <h1 className={styles.h1}>Categories</h1>  
           <div >
           { data.map((item)=>        
           <ul> <li onClick={() => onClickCat(item.cat_id)} className={styles.glassbtn}> {item.cat_name} </li></ul>)}
            </div>
        </div>
    </div>
</>
  )
}


export default dynamic (() => Promise.resolve(Hpsidebar), {ssr: false});

