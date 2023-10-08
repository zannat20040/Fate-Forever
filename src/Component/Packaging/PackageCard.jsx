import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const PackageCard = ({pack}) => {
  console.log(pack)
  return (
    <div className="card bg-white rounded-none shadow-md border-t-8 border-pink-600">
      <div className="card-body text-base">
        <h2 className="card-title text-3xl justify-center">{pack.package_name}</h2>
        <p className="text-6xl text-center font-semibold mt-5 text-pink-600"><sup>$</sup> {pack.price}</p>
        <p className="text-justify my-4">{pack.description}</p>
        <ul>
          {
            pack.services_included.map(data=>(
              <li className="flex gap-3 items-center"><BsCheckCircle className="text-pink-700" ></BsCheckCircle> {data} </li>
            ))
          }
        </ul>
        <div className="card-actions justify-center ">
          <button className="btn w-full mt-4 bg-pink-600 hover:bg-black text-white">Choose</button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
