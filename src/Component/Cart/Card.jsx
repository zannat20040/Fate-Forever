import React, { useEffect, useState } from "react";
import { BiMessageSquareCheck } from "react-icons/bi";
import Cart from "./Cart";

const Card = () => {
  const [allCard, setAllCard] = useState([]);
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setAllCard(data));
  }, []);

  const HandleCustomPack = (item) => {
    const addedItemId = item.service_id
    const findAddedItem = cardItem.find(value=>value.service_id === addedItemId)

    if(!findAddedItem){
        setCardItem([...cardItem, item]);
    }
  };

//   console.log(cardItem);
  return (
    <div className="grid grid-cols-1 md:flex gap-2 justify-around py-8 container mx-auto ">
        <div className="space-y-6  w-full md:w-2/3">
        {allCard.map((item) => (
          <div className=" flex bg-base-100 shadow-xl">
            <figure className="w-2/5">
              <img src={item.img} alt="card" className="h-full w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-rose-700 ">{item.service_name}</h2>
              <p className="  font-medium">Cost: {item.price}</p>
              <ul className=" text-sm">
                {item.features.map((feature) => (
                  <li className="flex items-start gap-3">
                    <BiMessageSquareCheck className="text-rose-700"></BiMessageSquareCheck>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="card-actions justify-start mt-5">
                <button
                  className="btn btn-primary w-1/2 mt-2 text-white bg-rose-700 border-0 hover:bg-black hover:text-white"
                  onClick={() => HandleCustomPack(item)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Cart cardItem={cardItem} key={cardItem.service_id}></Cart>
    </div>
  );
};

export default Card;
