import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-white shadow-md p-4 rounded-md">
      <figure>
        <img
          src={service.img}
          alt="service"
          className="h-60 w-full"

        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-rose-700">{service.service_name}</h2>
        <p className="text-black">{service.short_description}</p>
        <p className="text-rose-700 text-lg font-semibold">${service.price}</p>
        <div className="card-actions justify-center">
          <Link to={`/service/${service.service_id}`} className="btn btn-primary w-full mt-2 text-white bg-rose-700 border-0 hover:bg-black hover:text-white">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
