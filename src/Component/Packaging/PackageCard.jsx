import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PackageCard = ({pack}) => {

  const PurchaseHandle=()=>{
    toast.success("Purchase Success", {
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
  // console.log(pack)
  return (
    <div className="card bg-white  shadow-md border-t-8 border-rose-700 rounded-md">
      <div className="card-body text-base">
        <div>
        <h2 className="card-title text-2xl">{pack.package_name}</h2>
        <p className="text-5xl  font-semibold mt-3 text-rose-700"><sup>$</sup>{pack.price}</p>
        <hr className="mt-10"/>
        </div>
        <div className="flex-grow">
        <p className="text-center  ">{pack.description}</p>
        </div>
        <div className="flex-grow  mt-6">
        <p className=" text-rose-700 text-lg font-semibold ">Package Included:</p>
        <ul className=" mt-5">
          {
            pack.services_included.map((data,index)=>(
              <li className="flex gap-3 items-center" key={index}><BsCheckCircle className="text-rose-700" ></BsCheckCircle> {data} </li>
            ))
          }
        </ul>
        </div>
       
        <div className="card-actions justify-center ">
          <button onClick={PurchaseHandle} className="btn w-full mt-4 bg-rose-700 hover:bg-black text-white">Choose</button>
        <ToastContainer></ToastContainer>
        </div>
      </div>
      
    </div>
  );
};

export default PackageCard;
