import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // You can use any star icon library

const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div className='flex items-center'>
            {Array(fullStars).fill().map((_, index) => (
                <FaStar key={`full-${index}`} className='text-yellow-400' size={20} />
            ))}
            {halfStar && <FaStarHalfAlt className='text-yellow-400' size={20} />}
            {Array(emptyStars).fill().map((_, index) => (
                <FaRegStar key={`empty-${index}`} className='text-gray-300' size={20} />
            ))}
        </div>
    );
};

export default RatingStars;
