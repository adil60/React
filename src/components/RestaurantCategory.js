import { useState } from "react";
import ItemList from "../components/ItemList";

const RestaurantCategory = (props) => {
  const { card } = props.category.card;
  const { isActive,showItem,index} = props;

  const onToggle = (num) => {
    showItem(num);
    console.log(num);
  }
  return (
    <div className="w-8/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
      <div className="font-bold flex justify-between cursor-pointer"  >
        <div>
          <span>{card.title} </span>
           <span> ({card.itemCards.length})</span>
        </div>
        <div>
            { isActive ?<span onClick={()=> onToggle(-1)}>🔼</span> : <span onClick={()=> onToggle(index)}>🔽</span>  }
        </div>
      </div>
      <div>

        { isActive && card.itemCards.map((item) => (
          <div className="border-b">
            <ItemList
              data={{ item }}
              key={item.card.info.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
