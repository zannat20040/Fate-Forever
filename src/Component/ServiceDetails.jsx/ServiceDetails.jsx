import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { GrWaypoint } from "react-icons/gr";
import { TbJewishStar } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const serviceData = useLoaderData();

  const findDetails = serviceData.find((data) => data.service_id === id);

  const HandleWish = () => {


    const addWish = [];

    const wishesItem = JSON.parse(localStorage.getItem("Interested list"));

    if (!wishesItem) {
      addWish.push(findDetails);
      localStorage.setItem("Interested list", JSON.stringify(addWish));
    } 
    else {
       const isExist = wishesItem.find(item => item.service_id === id)
       if(!isExist){
     
        addWish.push(...wishesItem,findDetails);
        localStorage.setItem("Interested list", JSON.stringify(addWish));

       }
       else{
        
       }
    }

    
  };
    
  const FavouriteHandle=()=>{
    toast.success("Added into Wishlist", {
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
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={findDetails.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center w-2/5 mx-auto">
          <h2 className="card-title text-3xl text-slate-800">
            {findDetails.service_name}
          </h2>
          <p>{findDetails.long_description}</p>
          <span className="font-bold text-slate-800 mt-4 text-xl text-center">
            Service features
          </span>
          <div className="w-fit mx-auto ">
            <ul>
              {findDetails.features.map((data) => (
                <div className="flex gap-9 items-center space-y-2">
                  <GrWaypoint></GrWaypoint>
                  <li>{data}</li>
                </div>
              ))}
            </ul>
          </div>

          <div className="font-semibold w-full flex items-center mt-5">
            <p className="text-left text-lg">
              <span className="text-lg">Cost: $</span>
              {findDetails.price}
            </p>
                <ToastContainer></ToastContainer>
            <button className=" btn-sm btn bg-white rounded-md shadow-md w-fit focus:bg-rose-700 focus:text-white" onClick={HandleWish} >
                <TbJewishStar onClick={FavouriteHandle}></TbJewishStar>
            </button>
          </div>

          <div className="card-actions w-full mt-5">
            <button className="btn btn-primary w-full text-white bg-rose-700 border-0 hover:bg-black hover:text-white ">
              Purchase
            </button>
          </div>
        </div>
      </div>
    );
  };

export default ServiceDetails;
