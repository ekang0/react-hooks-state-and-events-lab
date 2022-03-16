import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All");

  function handleFilter(e) {
    //console.log(e.target.value)
    setFilterBy(e.target.value)
  };

  const itemsDisplayList = items.filter((item) => {
    if (filterBy === "All"){
      return true
    } else {
      return item.category === filterBy
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsDisplayList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
