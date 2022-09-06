import React from 'react'
import { products }  from './data'


// props;

const Shop = () => {
  return (
    <section>
     { 
      products.map((product) => {
       const { id, name, img } = product
       return <Product key={id} {...product}/>
        // return <Product key={id} product={product}/>
      })
     }
    </section>
  )
}


const Product = ({name, img}) => {
    
    // const { name, img } = props.product
    
  return (
    <div>
      <img src={img} height="100px" alt="" />
      <h4>{name}</h4>
    </div>
  )
}



export default Shop
