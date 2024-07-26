import React from 'react';
import { BOOKING1, EARTH } from '../../assets';

const Services = () => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-12 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
                <div className='col-span-1 md:col-span-6 flex flex-col items-start justify-center'>
                    <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold globalSubHeading'>
                        Services
                    </p>
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl globalParagraph leading-tight'>
                        Our top value categories for you
                    </p>
                </div>
                <div className='col-span-1 md:col-span-3 flex flex-col items-center justify-center bg-gray-100 rounded-xl p-4 md:p-6 lg:p-8 gap-4'>
                    <img src={EARTH} alt="Best Tour Guide" className='h-12 w-12 sm:h-16 sm:w-16' />
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center'>
                        Best Tour <br /> Guide
                    </p>
                    <p className='text-navColor text-sm sm:text-base md:text-lg lg:text-xl text-center'>
                        What looked like a small patch of purple grass, above five feet.
                    </p>
                </div>
                <div className='col-span-1 md:col-span-3 flex flex-col items-center justify-center bg-white rounded-xl shadow-custom p-4 md:p-6 lg:p-8 gap-4'>
                    <img src={BOOKING1} alt="Easy Booking" className='h-12 w-12 sm:h-16 sm:w-16' />
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center'>
                        Easy Booking
                    </p>
                    <p className='text-navColor text-sm sm:text-base md:text-lg lg:text-xl text-center'>
                        Square, was moving across the sand in their direction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
