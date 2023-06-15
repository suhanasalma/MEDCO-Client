import React from "react";
import BreadCrumbs from "../../../Components/BreadCrumbs/BreadCrumbs";

const FindDoctors = () => {
  return (
    <div className="p-2 w-10/12 mx-auto my-10">
      <BreadCrumbs
        breadcrumbs={[
          { title: "Home", link: "/home" },
          {
            title: "Find A Doctor",
            active: true,
            link: "/findDoctors",
          },
        ]}
      />
     
    </div>
  );
};

export default FindDoctors;
