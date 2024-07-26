import React from 'react';
import { TRAVELING1 } from '../../assets';
import { SiStarship } from "react-icons/si";
import { CiDiscount1 } from "react-icons/ci";

const TravelingPoint = () => {
    const countingData = [
        { number: "500+", title: "Holiday Package" },
        { number: "100", title: "Luxury Hotel" },
        { number: "7", title: "Premium Airlines" },
        { number: "2K+", title: "Happy Customer" },
    ];

    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-12 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
                <div className='col-span-1 md:col-span-7 relative'>
                    <p className='absolute top-4 right-4 md:top-[25%] md:right-[5%] bg-white flex items-center py-2 px-4 md:py-2 md:px-5 rounded-full shadow-custom gap-2'>
                        <CiDiscount1 className='text-ratingColor' /> Discounted Price
                    </p>
                    <img src={TRAVELING1} alt="Travel Image" className='h-60 w-full object-cover md:h-[700px]' />
                </div>
                <div className='col-span-1 md:col-span-5 pr-0 md:pr-20 relative'>
                    <p className='text-xl md:text-2xl lg:text-3xl font-semibold globalSubHeading'>
                        Travel Point
                    </p>
                    <p className='text-base md:text-lg lg:text-xl globalParagraph leading-tight'>
                        We help you find your dream location
                    </p>
                    <p className='text-base md:text-lg lg:text-xl text-navColor py-3 md:py-5 leading-tight'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                    </p>
                    <div className='absolute top-16 right-4 md:top-[47%] md:right-10 bg-[#FACD49] p-4 md:p-8 rounded-full shadow-custom'>
                        <SiStarship size={20} md:size={25} color='white' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 md:pt-10'>
                        {countingData.map((val, ind) => (
                            <div key={ind} className='border rounded-lg px-4 py-6 flex items-center justify-center'>
                                <div className='text-center'>
                                    <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-ratingColor'>{val.number}</p>
                                    <p className='text-sm md:text-base lg:text-lg text-cardHeadColor pt-2'>{val.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelingPoint;
