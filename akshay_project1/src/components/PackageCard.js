import React from "react";
import { FaStar } from "react-icons/fa";


const PackageCard = ({ data }) => { 
    return <>
        <div key={data.id} className="rounded-md shadow-md">
            <img className="w-[100%] aspect-video object-cover rounded-md" src={data.image} alt="package-img" />
            <div className="p-2">
                <h3 className="text-2xl font-semibold">{data.title}</h3>
                <p className="text-md">{data.subTitle}</p>
                <p className="text-xl font-semibold">${data.price}</p>
                <div className="flex gap-1 my-2">
                    <StarRating rating={data.rating} />
                </div>
                <button className="bg-blue-700 text-slate-100 px-3 py-2 rounded-md hover:bg-blue-800">Book</button>
            </div>
        </div>
    </>
}

const StarRating = ({ rating }) => {
    const starCount = Math.round(rating); // Round the rating to the nearest whole number
    const stars = Array.from({ length: 5 }, (_, index) => (
      <FaStar className={index < starCount ? "text-orange-500" : "text-slate-500"} key={index} />
    ));
  
    return <>{stars}</>;
};

export default PackageCard
