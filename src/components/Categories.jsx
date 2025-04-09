import React from 'react';
import { useState } from 'react';

const Categories = ({items}) => {
  const [listItems, setListItems] = useState(null);
  return (
   <div className="categories">
   <ul>
    <li 
    onClick={()=>setListItems(null)}
    className={listItems === null ? 'active' : ''}>Все</li>
     {items && items.map((item, index)=>
   <li 
   className={listItems === index ? 'active' : ''}
   onClick={()=>setListItems(index)}
   key={index}>{item}</li>)}
   </ul>
 </div>
  )
}

export default Categories