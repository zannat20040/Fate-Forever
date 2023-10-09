import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [managementServices, setManagementServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setManagementServices(data));
  }, []);

  return (
    <div className="container mx-auto" data-aos="fade-up">
      <h2 className="text-5xl mt-5 mb-11 font-bold text-center text-rose-700">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {
      managementServices.map(service=><ServiceCard service={service} key={service.service_id}></ServiceCard>)
      }
      </div>
    </div>
  );
};

export default Service;
