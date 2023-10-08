import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import PackageCard from './PackageCard';

const Packages = () => {

    const [allPackages, setAllPackages] = useState([])

    useEffect(()=>{
        fetch('/packages.json')
        .then(res=>res.json())
        .then(data=>setAllPackages(data))
    },[])
    return (
        <div className='container mx-auto'>
            <h2 className="text-5xl mt-28 mb-11 text-pink-600 font-semibold text-center">
        Our Packages
      </h2>
            <div className='grid grid-cols-3 gap-6'>
                {
                    allPackages.map(pack=>(
                        <PackageCard pack={pack} key={pack.package_id}></PackageCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Packages;