import React from 'react';
import Carousel from '../../Home/Carousel/Carousel';
import BreadCrumbs from '../../../Components/BreadCrumbs/BreadCrumbs';
import Title from '../../../Components/Title/Title';

const ClinicAndCenters = () => {
    return (
        <div>
            <div>
            <Carousel/>
            <BreadCrumbs  breadcrumbs={[
          { title: "Home", link: "/home" },
          {
            title: "Clinics and Centers",
            active: true,
            link: "/ClincAndCenter",
          },
        ]}/>
        </div>
        <div className='my-10'>
            <Title design='title text-center' title='Clinic and Center'/>
        </div>
        </div>
    );
};

export default ClinicAndCenters;