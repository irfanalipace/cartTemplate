import React from 'react';

const Card = ({ image, title, price, location, rating }) => {
    return (
        <div className="bg-white shadow-custom rounded-3xl overflow-hidden w-full max-w-xs md:max-w-sm lg:max-w-md flex flex-col justify-between h-full">
            <div>

                <img src={image} alt={title} className="w-full h-80 object-cover" />
            </div>
            <div className="p-4">
                <div className='flex items-start justify-between gap-2 mb-2'>
                    <h3 className="text-[23px] font-bold mb-2 text-cardHeadColor">{title}</h3>
                    <span className="globalSubHeading">{price}</span>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-navColor text-lg flex flex-col gap-4">{location}</p>
                    <p className="text-ratingColor font-semibold">{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
