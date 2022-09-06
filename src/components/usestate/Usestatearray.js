import React, { useState } from 'react'
import { products } from '../data'
const Usestatearray = () => {

    const [ items, setItems ] = useState(products)

    const clearItems = () => {
        setItems([]);
    }

    const clearItem = (id) => {
        setItems((items) => {
            
          let filteredItem = items.filter((item) => item.id !== id)
          return filteredItem
        })
    }

    const sayHi = () => {
      console.log('good afternoon');
    }
    
  return (
    <div className='maindiv'>
      <div>
        <h1>Use state Array</h1>
            {
                items.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.img} height='100px' alt="" />
                            <h4>{item.name}</h4>
                            <button onClick={() => clearItem(item.id)}>clear single item</button>
                        </div>
                    )
                })
            }

            {/* <button onClick={clearItems}>clear items</button> */}
            <button onClick={() => sayHi()}>call back</button>
      </div>
    </div>
  )
}

export default Usestatearray
