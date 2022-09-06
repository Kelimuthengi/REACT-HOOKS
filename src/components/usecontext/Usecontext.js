import React, { useState, useContext } from 'react'
import { products } from '../data'

const ItemContext = React.createContext();

const Usecontext = () => {

    const [items, setItems] = useState(products);

    const removeItem = (id) => {
        setItems((prevState) => {
            let newItems = prevState.filter((item) => item.id !== id)
            return newItems
        });
    }
    
  return (
    <ItemContext.Provider value={{ items, removeItem }}>
      <div className="maindiv">
        <div>
          <h1>Use context</h1>
          <AllItems />
          <SingleItem />
        </div>
      </div>
    </ItemContext.Provider>
  );
}


const AllItems = () => {

    const allItems = useContext(ItemContext);
    return (
        <div>
            {
                allItems.items.map((item) => {
                    return <SingleItem key={item.id} {...item}/>
                })
            }
        </div>
    )
}


const SingleItem = ({img, name, id}) => {

    const removeItem = useContext(ItemContext).removeItem;
   
    return (
      <div>
        <img src={img} height="100px" alt="" />
        <h4>{name}</h4>
        <button onClick={() => removeItem(id)}>Remove Item</button>
      </div>
    );
}
export default Usecontext
