import React, { useEffect, useState } from "react";
import WishListCard from "../Component/Wishlist/WishListCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishList = () => {
  const [displayWishlist, setDisplayWishlist] = useState([]);

  useEffect(() => {
    const wishList = JSON.parse(localStorage.getItem("Interested list"));
    setDisplayWishlist(wishList);
  }, []);
 
  const handlePurchse =()=>{
    toast.success('Purchased Successfully', {
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
    <div className="container mx-auto py-16">
      {
          displayWishlist? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {displayWishlist.map((item, index) => (
          <WishListCard item={item} key={index} handlePurchse={handlePurchse}></WishListCard>
        ))}
          </div> : <p>No favourite item added</p>
        }
    
    </div>
  );
};

export default WishList;
