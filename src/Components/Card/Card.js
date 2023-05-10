import React from 'react';
import Title from '../Title/Title';
import Details from '../Details/Details';
import { Link } from 'react-router-dom';
// import videoDoctor from '../../Assests/MainService/videodoctor.svg'

const Card = ({title,image,CardDesign,imgDesign,details,titleDesign,detailsDesign}) => {
    return (
        <Link className={CardDesign}>
            <img className={imgDesign} src={image} alt=''></img>
            <Title title={title} design={titleDesign}/>
            <Details design={detailsDesign} details={details}/>
        </Link>
    );
};

export default Card;