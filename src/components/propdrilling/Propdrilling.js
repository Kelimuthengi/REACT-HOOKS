import React, { useState } from 'react'
import { products } from '../data'
const Propdrilling = () => {

    const [items, setItems] = useState(products);
    
       const removeItem = (id) => {
         
        setItems((prevItems) => {

            const newItems = prevItems.filter((item) => item.id !== id)
            return newItems
        })
       };

  return (
    <div className="maindiv">
      <section>
        <h1>Prop drilling</h1>
        <AllItems items={items} removeItem={removeItem}/>
      </section>
    </div>
  );
}


const AllItems = ({ items, removeItem }) => {
  //   console.log(items);
  return (
    <div>
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} removeItem={removeItem} />;
      })}
    </div>
  );
};

const SingleItem = ({ img, name, id, removeItem }) => {
  return (
    <div>
      <img src={img} height="100px" alt="" />
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)}>Remove Items</button>
    </div>
  );
};


export default Propdrilling
