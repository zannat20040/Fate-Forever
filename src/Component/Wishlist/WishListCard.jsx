import React from 'react';

const WishListCard = ({item}) => {
    return (
        <div className="card h-64  bg-base-100 shadow-xl image-full">
  <figure><img src={item.img} alt="Shoes" className='w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title text-xl text-white">{item.service_name}</h2>
    <p className='text-lg  text-white'>Cost: {item.price}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary w-full text-white bg-rose-700 border-0 hover:bg-black hover:text-white ">
              Purchase
            </button>
    </div>
  </div>
</div>
    );
};

export default WishListCard;