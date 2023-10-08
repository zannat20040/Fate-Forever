import React from "react";
import MemberCard from "./MemberCard";

const Members = () => {
  const team_members = [
    {
      name: "John Smith",
      experience: "10 years",
      expertise: ["Wedding Planning", "Vendor Coordination"],
      img: 'https://i.ibb.co/CM8bRwX/depositphotos-617820964-stock-photo-portrait-successful-young-businessman-entrepreneur.webp'
    },
    {
      name: "Emily Johnson",
      experience: "8 years",
      expertise: ["Decor and Floral Design", "Catering and Menu Planning"],
      img:'https://i.ibb.co/z61DPRP/1629521430966.jpg'
    },
    {
      name: "David Brown",
      experience: "12 years",
      expertise: ["Wedding Styling and Beauty", "Entertainment"],
      img: 'https://i.ibb.co/JRBLNZX/depositphotos-105964810-stock-photo-young-businessman-working-in-office.webp'
    },
    {
      name: "Sarah Davis",
      experience: "15 years",
      expertise: ["Catering and Menu Planning", "Vendor Coordination"],
      img: 'https://i.ibb.co/hWnWjM7/istockphoto-1317804578-612x612.jpg'

    },
    {
      name: "Rachel White",
      experience: "7 years",
      expertise: ["Decor and Floral Design", "Wedding Planning"],
      img: 'https://i.ibb.co/dD7rZwv/dummy-profile.png'
    },
    {
      name: "Michael Green",
      experience: "9 years",
      expertise: ["Entertainment", "Wedding Styling and Beauty"],
      img: 'https://i.ibb.co/56cp5Bw/360-F-370290384-K0-VEqn-A7kgxmab-Rn0-QXiy-BCb-Cy-PGWNeh.jpg'
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-5xl mt-28 mb-11 font-semibold text-center text-pink-600">
        Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {
team_members.map((member, index) =>(
    <MemberCard member={member} key={index} ></MemberCard>
))
        }
      </div>
    </div>
  );
};

export default Members;
