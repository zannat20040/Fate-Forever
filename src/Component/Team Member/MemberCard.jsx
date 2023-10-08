import React from "react";

const MemberCard = ({member}) => {
    console.log(member)
  return (
    <div className="text-base text-center">
      <div className="avatar">
        <div className="w-24 rounded-full border-4 border-rose-700">
          <img src={member.img}/>
        </div>
      </div>
      <div className="card ">
        <div className="p-4">
          <h2 className="card-title justify-center">{member.name}</h2>
          <p>Work since, {member.experience}</p>
          <ul>
            {
              member.expertise.map(data=>(
                <span>{data}, </span>
              ))
            }
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
