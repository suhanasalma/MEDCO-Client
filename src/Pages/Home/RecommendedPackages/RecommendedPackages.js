import React from "react";
import Title from "../../../Components/Title/Title";
import cancer from "../../../Assests/Packages/cancer.jpg";
import heart from "../../../Assests/Packages/heart.jpg";
import skin from "../../../Assests/Packages/skin.jpg";
import RecommendedPackage from "./RecommendedPackage";
import LinkButton from "../../../Components/LinkButton/LinkButton";

const RecommendedPackages = () => {
  const specialPackage = [
    {
      title: "Vitality plus Cancer and Cardio Genes - Male",
      price: "20000tk",
      img: cancer,
    },
    {
      title: "Advanced Heart Check-up",
      price: "20000tk",
      img: heart,
    },
    {
      title: "Skin & Aesthetic Center",
      price: "20000tk",
      img: skin,
    },
    {
      title: "Skin & Aesthetic Center",
      price: "20000tk",
      img: skin,
    },
  ];
  return (
    <div className=" w-11/12 lg:w-10/12 mx-auto my-40">
      <div className="space-y-6 ">
        <Title
          title="Recommended Packages"
          design="title text-center text-2xl sm:text-4xl"
        />
        <p className="text-gray text-sm md:w-8/12 lg:w-8/12 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odio necessitatibus ipsum quidem ut? Libero possimus placeat unde enim consequatur quis numquam itaque ut illo? Officiis assumenda modi facilis sed optio incidunt ipsa aspernatur consequuntur amet laboriosam. Velit eaque voluptates dignissimos, deserunt ipsam praesentium, commodi a eos reprehenderit nemo ipsa?</p>
      </div>
      <div className=" md:flex container mx-auto mt-10  xl:justify-between md:justify-center xl:flex-nowrap md:flex-wrap grid sm:grid-cols-2 grid-cols-1 justify-items-center ">
        {specialPackage?.map((pack, i) => (
          <RecommendedPackage key={i} pack={pack} />
        ))}
      </div>
      <div className="w-52 mx-auto  mt-10 shadow-lg shadow-light-green">
        <LinkButton
          title="See All Packages"
        />
      </div>
    </div>
  );
};

export default RecommendedPackages;
