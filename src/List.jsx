import React, { useState } from 'react';

const List = ({list,filteredItems}) => {
    const [active, setActive] = useState(0);

  return (
    <div className='portfolio__list'>{list.map((item,index)=>{
        return (
            <button key={index} onClick={()=>{setActive(index);filteredItems(item)}} className={`${active===index?'active-work':''} porfolio__list-item text-cs`}>
                {item}
            </button>
        )
    })}</div>
  )
}

export default List