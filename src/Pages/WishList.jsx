import React, { useEffect, useState } from 'react';
import WishListCard from '../Component/Wishlist/WishListCard';

const WishList = () => {
    const [displayWishlist, setDisplayWishlist] = useState([]);

  useEffect(() => {
    const wishList = JSON.parse(localStorage.getItem("Interested list"));
    setDisplayWishlist(wishList);
  }, []);
  console.log(displayWishlist)

    return (
    <div className='container mx-auto py-16'>
        <div className='grid grid-cols-3 gap-6 '>
        {
        displayWishlist.map((item,index)=>(
            <WishListCard item={item} key={index}></WishListCard>
        ))
    }
    </div>
    </div>
    );
};

export default WishList;