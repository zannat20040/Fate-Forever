import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [managementServices, setManagementServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setManagementServices(data));
  }, []);
  console.log(managementServices);

  return (
    <div className="container mx-auto">
      <h2 className="text-5xl py-9 font-semibold text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {
      managementServices.map(service=><ServiceCard service={service}></ServiceCard>)
      }
      </div>
    </div>
  );
};

export default Service;
