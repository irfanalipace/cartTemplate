import React from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Button from '../../component/Button';
import Card from '../../component/Card';
import { CARD1, CARD2, CARD3, STARS } from '../../assets';

const Destination = () => {
    const cardData = [
        {
            image: CARD1,
            title: "Paradise Beach, Bantayan Island",
            price: "$550.16",
            location: "Rome, Italy",
            rating: "4.5 ⭐️",
        },
        {
            image: CARD2,
            title: "Ocean with full of Colors",
            price: "$20.99",
            location: "Maldives",
            rating: "4.5 ⭐️",
        },
        {
            image: CARD3,
            title: "Mountain View, Above the cloud",
            price: "$150.99",
            location: "United Arab Emirates",
            rating: "4.5 ⭐️",
        }
    ];

    return (
        <div className='relative px-4 sm:px-6 md:px-8 lg:px-16 py-8'>
            <div className='absolute top-8 right-4 sm:right-8 md:right-12 lg:right-16'>
                <img src={STARS} alt="Stars Decoration" className='h-16 sm:h-20 md:h-24 lg:h-28 w-auto' />
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-between mb-8'>
                <div className='text-center sm:text-left'>
                    <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold globalSubHeading'>
                        Top Destination
                    </p>
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl globalParagraph leading-tight'>
                        Explore top destination
                    </p>
                </div>
                <div className='flex gap-4 mt-4 sm:mt-0'>
                    <Button type='button' className='border p-3 sm:p-4 md:p-5 flex items-center justify-center rounded-full'>
                        <GoArrowLeft />
                    </Button>
                    <Button type='button' className='bg-tapc p-3 sm:p-4 md:p-5 flex items-center justify-center rounded-full'>
                        <GoArrowRight color='white' />
                    </Button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {cardData.map((card, index) => (
                    <div key={index} className='flex justify-center'>
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destination;
