import React, { useState } from "react";

const Cart = ({ cardItem }) => {

    let sum = 0;


    cardItem.map(result=>{
        const total = parseFloat(result.price)
        console.log(total)
    })
   

  return (
    <div className="bg-white h-fit">
      <h2 className="text-lg px-8 py-4 mb-11 bg-rose-700  text-center text-white">
        Create your own packages
      </h2>

      <ul className="px-8 ">
        {cardItem.map((result,index) =>(
           <div className="flex gap-4">
            <span>{index+1}.</span>
            <li className="flex-grow">{result.service_name}</li>
            <span>${result.price}</span>
           </div>
        ))}

      </ul>
      <div>
      <hr className="my-3"/>
      <p>{sum}</p>
      </div>
    </div>
  );
};

export default Cart;
