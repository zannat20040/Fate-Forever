// import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ cardItem }) => {

  // console.log(cardItem)
    let sum = 0;


    cardItem.map(result=>{
        const priceInt = parseInt(result.price)
        sum+=priceInt
      })
      // console.log(sum)
   
      const HandleCustom=()=>{
        toast.success('Your custom packages has been successfully purchased', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

  return (
    <div className="bg-white h-fit">
      <h2 className="text-lg px-8 py-4 bg-rose-700  text-center text-white">
        Create your own packages
      </h2>

      <div className="px-8 py-8">
      <ul className="">
        {cardItem.map((result,index) =>(
           <div className="flex gap-4">
            <span>{index+1}.</span>
            <li className="flex-grow">{result.service_name}</li>
            <span>${result.price}</span>
           </div>
        ))}

      </ul>
      <div>
      <div className="">
      <hr className="my-3"/>
      <div className="flex gap-4 justify-between">
      <p>Total: </p>
      <span>{sum}</span>
      </div>
      <button  onClick={HandleCustom} className="btn btn-primary w-full mt-5 text-white bg-rose-700 border-0 hover:bg-black hover:text-white">Purchase</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
